import * as reselect from 'reselect';

import { Action } from '../../redux/action';
import { selectors as userSelectors } from '../user';

interface CongressPerson {
  id: number;
  state: string;
  fullName: string;
  commonName: string;
  party: 'R' | 'I' | 'D';
  phoneNumbers: (string | number)[];
  address: string;
  email?: string;
  ontheissuesUrl: string;
  committees?: number[];
}

export interface Senator extends CongressPerson {
  seniority: 'junior' | 'senior';
}

export interface Representative extends CongressPerson {
  district: number;
}

export interface Committee {
  id: number;
  branch: 'house' | 'senate';
  type: 'standing' | 'special';
  name: string;
  chairman: number;
  rankingMember: number;
}

export interface State {
  senators: Senator[];
  representatives: Representative[];
  committees: Committee[];
}

export const KEY = 'congress';

export const actions = {
  SET: 'civic/congress/SET',
};

export const actionCreators = {
  setCongress: (congress: State) => ({ type: actions.SET, payload: congress }),
};

const initialState: State = {
  senators: [],
  representatives: [],
  committees: [],
};

export const reducer: Redux.Reducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET:
      return {...state, ...action.payload };

    default:
      return state;
  }
};

const getState = (state: any): State => state[KEY];
const getDistrict = (_state: any, { district }: { district: number }) => district;
const getUserState = (_state: any, { state }: { state: string }) => state;
const getSenators = reselect.createSelector(
  getState,
  userSelectors.getLocation,
  (congress, location) => congress.senators.filter(rep => (rep.state === location.state))
);
const getRepresentatives = reselect.createSelector(
  getState,
  userSelectors.getLocation,
  (congress, location) => congress.representatives
    .filter(rep => (rep.state === location.state && rep.district === location.district))
);
export const selectors = {
  getState,
  getSenators,
  getRepresentatives,
};
