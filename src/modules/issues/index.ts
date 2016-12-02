import { createSelector } from 'reselect';

import { Action } from '../../redux/action';

export interface Issue {
  id: number;
  name: string;
}

export interface State {
  list: Issue[];
  subscribed: number[];
}

export const KEY = 'issues';

export const actions = {
  SET_LIST: 'civic/issues/SET_LIST',
  SUBSCRIBE: 'civic/issues/SUBSCRIBE',
  UNSUBSCRIBE: 'civic/issues/UNSUBSCRIBE',
};

export const actionCreators = {
  setList: (list: Issue[]) => ({ type: actions.SET_LIST, payload: list }),
  subscribe: (taskId: number) => ({ type: actions.SUBSCRIBE, payload: taskId }),
  unsubscribe: (taskId: number) => ({ type: actions.UNSUBSCRIBE, payload: taskId }),
};

const initialState: State = {
  list: [],
  subscribed: [],
};

export const reducer: Redux.Reducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET_LIST:
      return {...state, list: action.payload };

    case actions.SUBSCRIBE:
      return {...state, subscribed: [...state.subscribed, action.payload] };

    case actions.UNSUBSCRIBE:
      return {...state, subscribed: state.subscribed.filter(id => id !== action.payload) };

    default:
      return state;
  }
};

const getState = (state: any): State => state[KEY];
const getList = createSelector(getState, state => state.list);
const getIssueId = (_state: any, { issueId }: { issueId: number }) => issueId;
const getIssue = createSelector(getList, getIssueId, (list, issueId) => list.find(issue => issue.id === issueId));
export const selectors = {
  getState,
  getList,
  getIssue,
};
