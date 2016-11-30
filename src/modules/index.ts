import * as congress from './congress';
import * as tasks from './tasks';
import * as user from './user';

export interface AppState {
  congress: congress.State;
  tasks: tasks.State;
  user: user.State;
}

export {
  congress,
  tasks,
  user,
}
