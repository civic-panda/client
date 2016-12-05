import { createSelector } from 'reselect';

import { Action } from '../../redux/action';

interface URL {
  name: string;
  url: string;
}

export interface Issue {
  id: string | number;
  name: string;
  summary: string;
  facts: string[];
  reading: URL[];
}

export interface State {
  list: Issue[];
  subscribed: (number | string)[];
}

export const KEY = 'issues';

export const actions = {
  SET_LIST: 'civic/issues/SET_LIST',
  SUBSCRIBE: 'civic/issues/SUBSCRIBE',
  UNSUBSCRIBE: 'civic/issues/UNSUBSCRIBE',
};

export const actionCreators = {
  setList: (list: Issue[]) => ({ type: actions.SET_LIST, payload: list }),
  subscribe: (taskId: number | string) => ({ type: actions.SUBSCRIBE, payload: taskId }),
  unsubscribe: (taskId: number | string) => ({ type: actions.UNSUBSCRIBE, payload: taskId }),
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
const getIssueId = (_state: any, { issueId }: { issueId: number | string }) => issueId;
const getIssue = createSelector(
  getList,
  getIssueId,
  (list, issueId) => list.find(issue => {
    const matchesString = issue.id === issueId;
    const matchesInt = typeof issueId === 'string' ? issue.id === parseInt(issueId, 10) : false;
    return matchesString || matchesInt;
  })
);
export const selectors = {
  getState,
  getList,
  getSubscribed,
  getIssue,
};
