import { autoRehydrate, persistStore } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/constants';

import { AppState } from '../modules';

const storeConfig = {
  keyPrefix: 'civic',
  debounce: 250,
};

export const reducer = (state = { isLoaded: false }, action: Redux.Action) => {
  switch (action.type) {
    case REHYDRATE:
      return { isLoaded: true };
    default:
      return state;
  }
};

export const KEY = 'storage';
export const storeEnhancer = autoRehydrate<AppState>();
export const loadStore = (store: Redux.Store<AppState>) => new Promise((resolve) => {
  persistStore<AppState>(store, storeConfig, resolve);
});
