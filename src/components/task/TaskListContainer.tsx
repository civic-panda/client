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

  // const parentCause = causes.selectors.getCauseById(cause.parent)(state);
  // const parentTasks = parentCause
  //   ? tasks.selectors.getRemaining(state).filter(task => task.causeId === parentCause.id) : [];
  // taskList = [...taskList, ...parentTasks];

  // const usersState = user.selectors.getLocation(state).state;
  // const stateName = stateLookup.lookup[usersState];
  // const stateCause = causes.selectors.getList(state)
  //   .find(thisCause => thisCause.name.toLowerCase() === `${cause.name.toLowerCase()} ${stateName.toLowerCase()}`);
  // if (stateCause && stateCause.id !== cause.id) {
  //   const stateCauseTasks = stateCause
  //     ? tasks.selectors.getRemaining(state).filter(task => task.causeId === stateCause.id) : [];
  //   taskList = [...taskList, ...stateCauseTasks];
  // }

  // HACK hide LA task for Infinite Flow based on address
  const usersState = user.selectors.getLocation(state).state;
  if (cause.id === 'feac969f-66b0-46af-90c7-f05bd08c29f5' && usersState !== 'CA') {
    taskList = taskList.filter(task => task.id !== 'a23069f3-194f-4b57-afa3-f773fd8fdec1');
  }

  return {
    causes: causes.selectors.getList(state),
    tasks: taskList,
    completedTasks: tasks.selectors.getCompleted(state),
  };
};

export const TaskListContainer = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(TaskList);
export default TaskListContainer;
