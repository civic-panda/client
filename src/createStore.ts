import { applyMiddleware, combineReducers, compose, createStore, Middleware } from 'redux';
import * as forms from 'redux-form';
import thunk from 'redux-thunk';

// Middlewares and enhancers
import * as logger from './redux/logger';
import * as mixpanel from './redux/mixpanel';
import * as persist from './redux/persist';

// Reducers
import { AppState, congress, causes, storage, tasks, user } from './modules';

const middleware = applyMiddleware(thunk, logger.middleware, mixpanel.middleware as Middleware);

const setupStore = () => {
  const rootReducer = combineReducers<AppState>({
    [congress.KEY]: congress.reducer,
    [causes.KEY]: causes.reducer,
    [tasks.KEY]: tasks.reducer,
    [user.KEY]: user.reducer,
    [storage.KEY]: storage.reducer,
    form: forms.reducer,
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
