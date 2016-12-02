import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, issues, tasks } from '../../modules';
import TaskList from './TaskList';

interface StateProps {
  tasks: tasks.Task[];
  issues: issues.Issue[];
}

interface ActionProps {}

interface OwnProps {}

const mapStateToProps = (state: AppState) => ({
  issues: issues.selectors.getList(state),
  tasks: tasks.selectors.getSubscribed(state),
});

export const TaskListContainer = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(TaskList);
export default TaskListContainer;
