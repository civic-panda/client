import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, causes, tasks } from '../../modules';
import TaskList from './TaskList';

interface StateProps {
  tasks: tasks.Task[];
  completedTasks: tasks.Task[];
  causes: causes.Cause[];
}

interface ActionProps {}

interface OwnProps {
  causeId?: string;
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  causes: causes.selectors.getList(state),
  tasks: ownProps.causeId
    ? tasks.selectors.getRemaining(state).filter(task => task.causeId === ownProps.causeId)
    : tasks.selectors.getRemaining(state),
  completedTasks: tasks.selectors.getCompleted(state),
});

export const TaskListContainer = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(TaskList);
export default TaskListContainer;
