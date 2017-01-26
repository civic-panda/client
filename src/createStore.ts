import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

// Middlewares and enhancers
import * as logger from './redux/logger';
import * as mixpanel from './redux/mixpanel';

// Reducers
import { AppState, congress, issues, storage, tasks, user } from './modules';

const middleware = applyMiddleware(logger.middleware, mixpanel.middleware);

const setupStore = () => {
  const rootReducer = combineReducers<AppState>({
    [congress.KEY]: congress.reducer,
    [issues.KEY]: issues.reducer,
    [tasks.KEY]: tasks.reducer,
    [user.KEY]: user.reducer,
    [storage.KEY]: storage.reducer,
  });

  const store = createStore<AppState>(
    rootReducer,
    undefined,
    compose(
      storage.storeEnhancer,
      middleware,
    )
  );

  storage.loadStore(store);
  return store;
};

export default setupStore;
