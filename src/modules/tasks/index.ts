import { createSelector } from 'reselect';

import { Action } from '../../redux/action';
import { selectors as issueSelectors } from '../issues';

type Template = 'CallSenate' | 'CallHouse' | 'CallCongress';

type Location = {
  latitude?: number;
  longitude?: number;
  street1?: string;
  suburb?: string;
  state?: string;
  postcode?: string;
  country?: string;
}

export interface Task {
  id: string;
  name: string;
  issue: string;
  tags: string[];
  duration: number | string;
  startDate: number;
  endDate: number;
  location: Location;
  template: Template;
  templateProps: any;
}

export interface State {
  list: Task[];
  completed: string[];
}

export const KEY = 'tasks';

export const actions = {
  SET_LIST: 'civic/tasks/SET_LIST',
  COMPLETE_TASK: 'civic/tasks/COMPLETE_TASK',
  RESTART_TASK: 'civic/tasks/RESTART_TASK',
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
      return (state.completed.indexOf(action.payload) === -1)
        ? {...state, completed: [...state.completed, action.payload] }
        : state;

    case actions.RESTART_TASK:
      return {...state, completed: state.completed.filter(id => id !== action.payload) };

    default:
      return state;
  }
};

const getState = (state: any): State => state[KEY];
const getList = createSelector(getState, state => state.list);
const getSubscribed = createSelector(
  getList,
  issueSelectors.getSubscribed,
  (tasks, subscribedIssues) => tasks.filter(task => subscribedIssues.indexOf(task.issue) > -1)
);
const getCompleted = createSelector(
  getState,
  state => state.list.filter(task => state.completed.indexOf(task.id) > -1)
);
const getRemaining = createSelector(
  getState,
  getSubscribed,
  (state, subscribed) => subscribed.filter(task => state.completed.indexOf(task.id) === -1)
);
const getTaskId = (_state: any, { taskId }: { taskId: string }) => taskId;
const getTask = createSelector(getList, getTaskId, (list, taskId) => list.find(task => task.id === taskId));
export const selectors = {
  getState,
  getCompleted,
  getRemaining,
  getList,
  getTask,
  getSubscribed,
};
