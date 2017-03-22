import * as React from 'react';
import { connect } from 'react-redux';

import * as stateLookup from '../../util/states';
import { AppState, causes, user, tasks } from '../../modules';
import TaskList from './TaskList';

interface StateProps {
  tasks: tasks.Task[];
  completedTasks: tasks.Task[];
  causes: causes.Cause[];
}

interface ActionProps {}

interface OwnProps {
  causeId: string;
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  let taskList: tasks.Task[] = [];

  const cause = causes.selectors.getCauseById(ownProps.causeId)(state);
  const causeTasks = tasks.selectors.getRemaining(state).filter(task => task.causeId === cause.id);
  taskList = [...taskList, ...causeTasks];

  const parentCause = causes.selectors.getCauseById(cause.parent)(state);
  const parentTasks = parentCause
    ? tasks.selectors.getRemaining(state).filter(task => task.causeId === parentCause.id) : [];
  taskList = [...taskList, ...parentTasks];

  const usersState = user.selectors.getLocation(state).state;
  const stateName = stateLookup.lookup[usersState];
  const stateCause = causes.selectors.getList(state).find(thisCause => thisCause.name.indexOf(stateName) > -1);
  if (stateCause.id !== cause.id) {
    const stateCauseTasks = stateCause
      ? tasks.selectors.getRemaining(state).filter(task => task.causeId === stateCause.id) : [];
    taskList = [...taskList, ...stateCauseTasks];
  }

  return {
    causes: causes.selectors.getList(state),
    tasks: taskList,
    completedTasks: tasks.selectors.getCompleted(state),
  };
};

export const TaskListContainer = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(TaskList);
export default TaskListContainer;
