import { createSelector } from 'reselect';

import { Action } from '../../redux/action';
import { selectors as issueSelectors } from '../issues';

type Activity = 'door knocking' | 'phone banking' | 'rally' | string;
type Tag = 'high priority' | string;
type Template = 'CallSenate' | 'CallHouse' | 'CallCongress';

type Location = {
  latitude?: number;
  longitude?: number;
}

export interface Task {
  id: number;
  completed: boolean;
  name: string;
  issueId: number;
  activityType: Activity;
  tags: Tag[];
  duration: number | string;
  startDate: number;
  endDate: number;
  location: Location;
  notes: string;
  template: Template;
  templateProps: any;
}

export interface State {
  list: Task[];
  completed: number[];
}

export const KEY = 'tasks';

export const actions = {
  SET_LIST: 'civic/tasks/SET_LIST',
  COMPLETE_TASK: 'civic/tasks/COMPLETE_TASK',
};

export const actionCreators = {
  setList: (list: Task[]) => ({ type: actions.SET_LIST, payload: list }),
  completeTask: (taskId: number) => ({ type: actions.COMPLETE_TASK, payload: taskId }),
};

const initialState: State = {
  list: [],
  completed: [],
};

export const reducer: Redux.Reducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET_LIST:
      return {...state, list: action.payload };

    case actions.COMPLETE_TASK:
      return {...state, completed: [...state.completed, action.payload] };

    default:
      return state;
  }
};

const getState = (state: any): State => state[KEY];
const getList = createSelector(getState, state => state.list);
const getSubscribed = createSelector(
  getList,
  issueSelectors.getSubscribed,
  (tasks, subscribedIssues) => tasks.filter(task => subscribedIssues.indexOf(task.issueId) > -1)
);
const getTaskId = (_state: any, { taskId }: { taskId: number }) => taskId;
const getTask = createSelector(getList, getTaskId, (list, taskId) => list.find(task => task.id === taskId));
export const selectors = {
  getState,
  getList,
  getTask,
  getSubscribed,
};
