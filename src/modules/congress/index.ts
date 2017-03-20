import * as reselect from 'reselect';

import storeKey from '../../storeKey';
import { Action } from '../../redux/action';
import { selectors as userSelectors } from '../user';

interface Term {
  start: string;
  end: string;
  state: string;
  party: string;
  caucus: string;
  partyAffiliations: string;
  url: string;
  address: string;
  phone: string;
  fax: string;
  contactForm: string;
  office: string;
  rssUrl: string;
}

interface RepTerm extends Term {
  type: 'rep';
  district: number;
}

interface SenTerm extends Term {
  type: 'sen';
  class: number;
  stateRank: 'junior' | 'senior';
}

export interface CongressPerson {
  id: {
    bioguide: string;
    thomas: string;
    govtrack: number;
    opensecrets: string;
    votesmart: number;
    fec: string[];
    cspan: number;
    wikipedia: string;
    ballotpedia: string;
    maplight: number;
    houseHistory: number;
    icpsr: number;
  };
  name: {
    first: string;
    middle: string;
    last: string;
    nickname?: string;
    suffix?: string;
    officialFull?: string;
  };
  bio: {
    birthday: string;
    gender: 'M' | 'F';
    religion?: string;
  };
  terms: (SenTerm | RepTerm)[];
}

export interface Committee {
  type: 'house' | 'senate' | 'joint';
  name: string;
  thomasId: string;
  senateCommitteeId?: string;
  houseCommitteeId?: string;
  jurisdiction: string;
  jurisdictionSource: string;
  url: string;
  address: string;
  phone: string;
  rssUrl: string;
  minorityRssUrl: string;

  subcommittees: Subcommittee[];
}

export interface Subcommittee {
  name: string;
  thomasId: string;
  address: string;
  phone: string;
  wikipedia?: string;
}

export interface State {
  callList: any[];
  stateCallList: any[];
  senators: CongressPerson[];
  representatives: CongressPerson[];
  committees: Committee[];
}

export const KEY = 'congress';

export const actions = {
  SET: `${storeKey}/${KEY}/SET`,
};

export const actionCreators = {
  setCongress: (congress: State) => ({ type: actions.SET, payload: congress }),
};

const initialState: State = {
  callList: [],
  stateCallList: [],
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
const getCallList = reselect.createSelector(getState, state => state.callList);
const getStateCallList = reselect.createSelector(getState, state => state.stateCallList);
const getSenators = reselect.createSelector(
  getState,
  userSelectors.getLocation,
  (congress, location) => congress.senators.filter(sen => (sen.terms[sen.terms.length - 1].state === location.state))
);
const getRepresentatives = reselect.createSelector(
  getState,
  userSelectors.getLocation,
  (congress, location) => congress.representatives
    .filter(rep => {
      const currentTerm = rep.terms[rep.terms.length - 1] as RepTerm;
      return (currentTerm.state === location.state  && currentTerm.district === location.district);
    })
);
export const selectors = {
  getCallList,
  getStateCallList,
  getState,
  getSenators,
  getRepresentatives,
};
