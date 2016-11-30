import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, tasks } from '../../modules';
import TaskList from './TaskList';

interface StateProps {
  tasks: tasks.Task[];
}

interface ActionProps {}

interface OwnProps {}

const mapStateToProps = (state: AppState) => ({
  tasks: tasks.selectors.getList(state),
});

export const ListContainer = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(TaskList);
export default ListContainer;
