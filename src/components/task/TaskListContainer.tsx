import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, issues, tasks } from '../../modules';
import TaskList from './TaskList';

interface StateProps {
  tasks: tasks.Task[];
  completedTasks: tasks.Task[];
  issues: issues.Issue[];
}

interface ActionProps {}

interface OwnProps {
  organizationId?: string;
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  issues: issues.selectors.getList(state),
  tasks: ownProps.organizationId
    ? tasks.selectors.getRemaining(state).filter(task => task.issue === ownProps.organizationId)
    : tasks.selectors.getRemaining(state),
  completedTasks: tasks.selectors.getCompleted(state),
});

export const TaskListContainer = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(TaskList);
export default TaskListContainer;
