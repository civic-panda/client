import * as congress from './congress';
import * as issues from './issues';
import * as storage from './storage';
import * as tasks from './tasks';
import * as user from './user';

export interface AppState {
  congress: congress.State;
  issues: issues.State;
  tasks: tasks.State;
  user: user.State;
  storage: storage.State;
}

export {
  congress,
  issues,
  tasks,
  user,
  storage,
}
