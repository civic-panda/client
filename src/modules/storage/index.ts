import { REHYDRATE } from 'redux-persist/constants';

export interface State { isLoaded: boolean };

export const reducer = (state: State = { isLoaded: false }, action: Redux.Action) => {
  switch (action.type) {
    case REHYDRATE:
      return { isLoaded: true };
    default:
      return state;
  }
};

export const KEY = 'storage';
export const selectors = {
  isLoaded: (state: any) => state[KEY].isLoaded,
}
