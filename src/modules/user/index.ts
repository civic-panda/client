import { createSelector } from 'reselect';

import { Action } from '../../redux/action';

type Cause = string
export type Location = {
  name: string;
  address: string;
  state: string;
  district: number;
  latitude: number;
  longitude: number;
}

export interface State {
  id?: number;
  name?: string;
  email?: string;
  isSubscribed?: 'loading' | boolean;
  location?: Location;
  causes: Cause[];
}

export const KEY = 'user';

export const actions = {
  SET: 'civic/user/SET',
  SET_LOCATION: 'civic/user/SET_LOCATION',
  SUBSCRIPTION_ATTEMPT: 'civic/user/SUBSCRIPTION_ATTEMPT',
  SUBSCRIPTION_FAILURE: 'civic/user/SUBSCRIPTION_FAILURE',
  SUBSCRIPTION: 'civic/user/SUBSCRIPTION',
};

export const actionCreators = {
  setLocation: (location: Location) => ({ type: actions.SET_LOCATION, payload: location }),
  set: (user: State) => ({ type: actions.SET, payload: user }),
  subscriptionAttempt: () => ({ type: actions.SUBSCRIPTION_ATTEMPT }),
  subscriptionFailure: () => ({ type: actions.SUBSCRIPTION_FAILURE }),
  subscription: (email: string) => ({ type: actions.SUBSCRIPTION, payload: { email }}),
};

const initialState: State = {
  id: undefined,
  name: undefined,
  email: undefined,
  isSubscribed: false,
  location: undefined,
  causes: [],
};

export const reducer: Redux.Reducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET:
      return {...state, ...action.payload };

    case actions.SET_LOCATION:
      return {...state, location: action.payload };

    case actions.SUBSCRIPTION_ATTEMPT:
      return {...state, isSubscribed: 'loading' };

    case actions.SUBSCRIPTION_FAILURE:
      return {...state, isSubscribed: false };

    case actions.SUBSCRIPTION:
      return {...state, email: action.payload.email, isSubscribed: true };

    default:
      return state;
  }
};

const getState = (state: any): State => state[KEY];
const getLocation = createSelector(getState, state => state.location);

export const selectors = {
  getState,
  getLocation,
};
