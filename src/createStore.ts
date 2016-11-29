import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// Middlewares and enhancers
import * as logger from './redux/logger';
import * as persist from './redux/persist';

// Reducers
import { AppState, tasks } from './modules';

const middleware = applyMiddleware(logger.middleware);

const setupStore = () => {
  const rootReducer = combineReducers<AppState>({
    [tasks.KEY]: tasks.reducer,
    [persist.KEY]: persist.reducer,
  });

  const store = createStore<AppState>(
    rootReducer,
    undefined,
    compose(
      persist.storeEnhancer,
      middleware,
    )
  );

  persist.loadStore(store);
  return store;
};

export default setupStore;
