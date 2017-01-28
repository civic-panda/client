import * as congress from './congress';
import * as causes from './causes';
import * as storage from './storage';
import * as tasks from './tasks';
import * as user from './user';

export interface AppState {
  congress: congress.State;
  causes: causes.State;
  tasks: tasks.State;
  user: user.State;
  storage: storage.State;
}

export {
  congress,
  causes,
  tasks,
  user,
  storage,
}
