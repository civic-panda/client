import storeKey from '../../storeKey';
import { AppState } from '../index';

export interface State {
  userId: string;
  token: string;
  refreshToken: string;
  jwtExpired: boolean;
};

const initialState: Partial<State> = {
  userId: undefined,
  token: undefined,
  refreshToken: undefined,
  jwtExpired: undefined,
};

export const KEY = 'auth';
export const SET = `${storeKey}/${KEY}/SET`;
export const LOG_OUT = `${storeKey}/${KEY}/LOG_OUT`;
export const JWT_EXPIRED = `${storeKey}/${KEY}/JWT_EXPIRED`;
export const selectors = {
  isLoggedIn: (state: AppState) => !!state.user.token,
  userId: (state: AppState) => state.user.userId,
  token: (state: AppState) => state.user.token,
  refreshToken: (state: AppState) => state.user.refreshToken,
}

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET:
      return { ...state, ...action.payload, jwtExpired: false };
    case JWT_EXPIRED:
      return { ...state, jwtExpired: true };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};
