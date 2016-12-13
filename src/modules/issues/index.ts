import { createSelector } from 'reselect';

import { Action } from '../../redux/action';

export interface Issue {
  id: string;
  name: string;
  summary: string;
  facts: string;
  reading: string;
  image: {
    width: number;
    height: number;
    secure_url: string;
  };
}

export interface State {
  list: Issue[];
  subscribed: string[];
}

export const KEY = 'issues';

export const actions = {
  SET_LIST: 'civic/issues/SET_LIST',
  SUBSCRIBE: 'civic/issues/SUBSCRIBE',
  UNSUBSCRIBE: 'civic/issues/UNSUBSCRIBE',
};

export const actionCreators = {
  setList: (list: Issue[]) => ({ type: actions.SET_LIST, payload: list }),
  subscribe: (taskId: string) => ({ type: actions.SUBSCRIBE, payload: taskId }),
  unsubscribe: (taskId: string) => ({ type: actions.UNSUBSCRIBE, payload: taskId }),
};

const initialState: State = {
  list: [],
  subscribed: [],
};

export const reducer: Redux.Reducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET_LIST: {
      const newIds = action.payload
        .filter((issue: Issue) => state.list.findIndex(i => i.id === issue.id) === -1)
        .map((issue: Issue) => issue.id);
      return {...state, list: action.payload, subscribed: [...state.subscribed, ...newIds] };
    }

    case actions.SUBSCRIBE:
      return (state.subscribed.indexOf(action.payload) === -1)
        ? {...state, subscribed: [...state.subscribed, action.payload] }
        : state;

    case actions.UNSUBSCRIBE:
      return {...state, subscribed: state.subscribed.filter(id => id !== action.payload) };

    default:
      return state;
  }
};

const getState = (state: any): State => state[KEY];
const getList = createSelector(getState, state => state.list);
const getSubscribed = createSelector(getState, state => state.subscribed);
const getIssueId = (_state: any, { issueId }: { issueId: string }) => issueId;
const getIssue = createSelector(
  getList,
  getIssueId,
  (list, issueId) => list.find(issue => issue.id === issueId)
);
export const selectors = {
  getState,
  getList,
  getSubscribed,
  getIssue,
};
