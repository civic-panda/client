import * as reselect from 'reselect';

import { Action } from '../../redux/action';

type Activity = 'door knocking' | 'phone banking' | 'rally' | string;
type Cause = string
type Tag = 'open internet' | 'privacy' | string;
type Template = 'call';

type Location = {
  latitude?: number;
  longitude?: number;
}

type Step = {
  name: string;
  template: Template;
  templateProps: { [index: string]: any }
}

export interface Task {
  id: number;
  name: string;
  type: Activity[];
  causes: Cause[];
  tags: Tag[];
  duration: number;
  startDate: number;
  endDate: number;
  location: Location;
  notes: string;
  steps: Step[];
}

export interface State {
  list: Task[];
}

export const KEY = 'tasks';

export const actions = {
  SET_LIST: 'civic/tasks/SET_LIST',
};

export const actionCreators = {
  setList: (list: Task[]) => ({ type: actions.SET_LIST, payload: list }),
};

const initialState: State = {
  list: [],
};

export const reducer: Redux.Reducer<State> = (state = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET_LIST:
      return {...state, list: action.payload };

    default:
      return state;
  }
};

const getState = (state: any): State => state[KEY];
const getList = reselect.createSelector(getState, state => state.list);
const getTaskId = (_state: any, { taskId }: { taskId: number }) => taskId;
const getTask = reselect.createSelector(getList, getTaskId, (list, taskId) => list.find(task => task.id === taskId));
export const selectors = {
  getState,
  getList,
  getTask,
};