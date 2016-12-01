import { createSelector } from 'reselect';

import { Action } from '../../redux/action';

type Activity = 'door knocking' | 'phone banking' | 'rally' | string;
type Issue = {
  name: string;
  requestedAction: string;
}
type Tag = 'open internet' | 'privacy' | string;
type Template = 'CallSenate' | 'CallHouse' | 'CallCongress';

type Location = {
  latitude?: number;
  longitude?: number;
}

export interface Task {
  id: number;
  completed: boolean;
  name: string;
  issue: Issue;
  activityType: Activity;
  tags: Tag[];
  duration: number;
  startDate: number;
  endDate: number;
  location: Location;
  notes: string;
  template: Template;
  templateProps: any;
}

export interface State {
  list: Task[];
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
};

export const reducer: Redux.Reducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET_LIST:
      return {...state, list: action.payload };

    case actions.COMPLETE_TASK: {
      const index = state.list.findIndex(task => task.id === action.payload);
      const updatedTask = { ...state.list[index], completed: true };

      return { ...state, list: [
        ...state.list.slice(0, index),
        updatedTask,
        ...state.list.slice(index + 1),
      ]};
    }

    default:
      return state;
  }
};

const getState = (state: any): State => state[KEY];
const getList = createSelector(getState, state => state.list);
const getTaskId = (_state: any, { taskId }: { taskId: number }) => taskId;
const getTask = createSelector(getList, getTaskId, (list, taskId) => list.find(task => task.id === taskId));
export const selectors = {
  getState,
  getList,
  getTask,
};
