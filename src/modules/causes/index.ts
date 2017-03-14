import { createSelector } from 'reselect';
import * as _ from 'lodash';

import storeKey from '../../storeKey';
import { Action } from '../../redux/action';

export interface Cause {
  id: string;
  name: string;
  callToAction: string;
  blurb: string;
  summary: string;
  brandColor: string;
  facts: string;
  reading: string;
  logoImage: string;
  heroImage: string;
  placeholderImage: string;
  parent: string;
  children: string[];
  published: boolean;
}

export interface State {
  list: Cause[];
  subscribed: string[];
}

export const KEY = 'causes';

export const actions = {
  SET_LIST: `${storeKey}/${KEY}/SET_LIST`,
  SUBSCRIBE: `${storeKey}/${KEY}/SUBSCRIBE`,
  UNSUBSCRIBE: `${storeKey}/${KEY}/UNSUBSCRIBE`,
};

export const actionCreators = {
  setList: (list: Cause[]) => ({ type: actions.SET_LIST, payload: list }),
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
        .filter((cause: Cause) => state.list.findIndex(i => i.id === cause.id) === -1)
        .map((cause: Cause) => cause.id);
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
const getCauseId = (_state: any, { causeId }: { causeId: string }) => causeId;
const getCause = createSelector(
  getList,
  getCauseId,
  (list, causeId) => list.find(cause => cause.id === causeId)
);
const getCauseById = (causeId: string) => createSelector(getList, list => list.find(cause => cause.id === causeId));
const getCauseNameFromParam = (_state: any, { param }: { param: string }) => param.split('-').join(' ').toLowerCase();
const getCauseByParam = createSelector(
  getList,
  getCauseNameFromParam,
  (list, causeName) => list.find(cause => cause.name.toLowerCase() === causeName)
);
const getChildCauses = (parentId: string) => createSelector(getList, list => list.filter(cause => cause.parent === parentId));

export const selectors = {
  getState,
  getList,
  getSubscribed,
  getCause,
  getCauseById,
  getCauseByParam,
  getChildCauses,
};
