import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// Middlewares and enhancers
import * as logger from './redux/logger';
import * as persist from './redux/persist';

// Reducers
import { AppState, congress, issues, tasks, user } from './modules';

const middleware = applyMiddleware(logger.middleware);

const setupStore = () => {
  const rootReducer = combineReducers<AppState>({
    [congress.KEY]: congress.reducer,
    [issues.KEY]: issues.reducer,
    [tasks.KEY]: tasks.reducer,
    [user.KEY]: user.reducer,
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
