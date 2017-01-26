import { autoRehydrate, persistStore } from 'redux-persist';
import { REHYDRATE } from 'redux-persist/constants';

import { AppState } from '../modules';

const storeConfig = {
  keyPrefix: 'civic',
  debounce: 250,
};

export const storeEnhancer = autoRehydrate<AppState>();
export const loadStore = (store: Redux.Store<AppState>) => new Promise((resolve) => {
  persistStore<AppState>(store, storeConfig, resolve);
});
