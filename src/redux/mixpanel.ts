import * as mixpanel from 'mixpanel-browser';
import { REHYDRATE } from 'redux-persist/constants';

import { AppState, issues, tasks, user } from '../modules';
import { Action } from './action';

mixpanel.init('bf29b5b66563531acdc0ea80c73b3705');

export const middleware = (store: Redux.Store<AppState>) =>
  (next: (action: Action) => void) =>
  (action: Action) => {
    switch (action.type) {
      case REHYDRATE:
        mixpanel.track('redux loaded');
        if (action.payload.user && action.payload.user.email) {
          mixpanel.identify(action.payload.user.email);
        }
        break;

      case user.actions.SUBSCRIPTION:
        mixpanel.track('email subscribed', action.payload);
        mixpanel.alias(action.payload.email);
        mixpanel.people.set_once({ $email: action.payload.email });
        break;

      case user.actions.SET_LOCATION:
        mixpanel.track('location set', action.payload);
        mixpanel.people.set({
          state: action.payload.state,
          district: action.payload.district,
        });
        break;

      case tasks.actions.COMPLETE_TASK:
        mixpanel.track('task completed', action.payload);
        mixpanel.people.increment('tasks completed');
        break;

      case issues.actions.SUBSCRIBE:
        mixpanel.track('issue subscribed', { issue: action.payload });
        mixpanel.people.increment('issues subscribed to');
        break;

      case issues.actions.UNSUBSCRIBE:
        mixpanel.track('issue unsubscribed', { issue: action.payload });
        mixpanel.people.increment('issues subscribed to', -1);
        break;

      default:
    }

    return next(action);
  };
