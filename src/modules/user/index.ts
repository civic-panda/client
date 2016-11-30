import { createSelector } from 'reselect';

import { Action } from '../../redux/action';

type Cause = string
type Location = {
  name: string;
  state: string;
  district: number;
  latitude?: number;
  longitude?: number;
}

export interface State {
  id?: number;
  name?: string;
  location?: Location;
  causes: Cause[];
}

export const KEY = 'user';

export const actions = {
  SET: 'civic/user/SET',
  SET_LOCATION: 'civic/user/SET_LOCATION',
};

export const actionCreators = {
  setLocation: (location: Location) => ({ type: actions.SET_LOCATION, payload: location }),
  set: (user: State) => ({ type: actions.SET, payload: user }),
};

const initialState: State = {
  id: undefined,
  name: undefined,
  location: undefined,
  causes: [],
};

export const reducer: Redux.Reducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET:
      return {...state, ...action.payload };

    case actions.SET_LOCATION:
      return {...state, location: action.payload };

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
