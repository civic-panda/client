import { createSelector } from 'reselect';
import { SubmissionError } from 'redux-form';
import { Dispatch } from 'react-redux';

import { callApi, callAuthenticatedApi } from '../../util/api';
import storeKey from '../../storeKey';
import { Action } from '../../redux/action';
import { AppState } from '../index';

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
  userId?: string;
  token: string;
  refreshToken: string;
  name?: string;
  email?: string;
  isSubscribed?: 'loading' | boolean;
  location?: Location;
  causes: Cause[];
}

export const KEY = 'user';

export const actions = {
  SET: `${storeKey}/${KEY}/SET`,
  SET_LOCATION: `${storeKey}/${KEY}/SET_LOCATION`,
  SUBSCRIPTION_ATTEMPT: `${storeKey}/${KEY}/SUBSCRIPTION_ATTEMPT`,
  SUBSCRIPTION_FAILURE: `${storeKey}/${KEY}/SUBSCRIPTION_FAILURE`,
  SUBSCRIPTION: `${storeKey}/${KEY}/SUBSCRIPTION`,
  LOG_IN: `${storeKey}/${KEY}/LOG_IN`,
  SIGN_UP: `${storeKey}/${KEY}/SIGN_UP`,
};

export const setToken = (token: string) => ({ type: actions.SET, payload: { token } });

const signUp = (formValues: any) => {
  return async (dispatch: Dispatch<AppState>) => {
    try {
      const payload = await callApi('users', 'POST', formValues);
      dispatch({ type: actions.SIGN_UP, payload });
    } catch (e) {
      if (e.status === 409) {
        throw new SubmissionError({ _error: 'Account already exists.' });
      } else {
        throw new SubmissionError({ _error: 'Error signing up.' });
      }
    }
  }
}

const logIn = (formValues: any) => {
  return async (dispatch: Dispatch<AppState>) => {
    try {
      const payload = await callApi('tokens', 'POST', formValues);
      dispatch({ type: actions.LOG_IN, payload });
    } catch (e) {
      if (e.status === 404) {
        throw new SubmissionError({ _error: 'Account not found.' });
      } else if (e.status === 400) {
        throw new SubmissionError({ _error: 'Incorrect email or password.' });
      } else {
        throw new SubmissionError({ _error: 'Error logging in.' });
      }
    }
  }
}

const load = (userId: any) => {
  return async (dispatch: Dispatch<AppState>, getState: any) => {
    try {
      const response = await callAuthenticatedApi(dispatch, getState, `users/${userId}`, 'GET');
      dispatch({ type: actions.SET, payload: response.user });
      // dispatch({ type: causes.SET, payload: response.causes });
      // dispatch({ type: tasks.SET, payload: response.tasks });
      // dispatch({ type: volunteers.SET, payload: response.volunteers });
    } catch (e) {
      console.warn('error fetching user', e);
    }
  }
}

export const actionCreators = {
  setLocation: (location: Location) => ({ type: actions.SET_LOCATION, payload: location }),
  set: (user: State) => ({ type: actions.SET, payload: user }),
  subscriptionAttempt: () => ({ type: actions.SUBSCRIPTION_ATTEMPT }),
  subscriptionFailure: () => ({ type: actions.SUBSCRIPTION_FAILURE }),
  subscription: (email: string) => ({ type: actions.SUBSCRIPTION, payload: { email }}),
  logOut: () => ({ type: actions.SET, payload: initialState }),
  signUp,
  logIn,
  load,
};

const initialState: State = {
  userId: undefined,
  token: undefined,
  refreshToken: undefined,
  name: undefined,
  email: undefined,
  isSubscribed: false,
  location: undefined,
  causes: [],
};

export const reducer: Redux.Reducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.LOG_IN:
    case actions.SIGN_UP:
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
const isLoggedIn = createSelector(getState, state => !!state.token);
const userId = createSelector(getState, state => state.userId);
const token = createSelector(getState, state => state.token);
const refreshToken = createSelector(getState, state => state.refreshToken);

export const selectors = {
  getState,
  getLocation,
  isLoggedIn,
  userId,
  token,
  refreshToken,
};
