import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, congress, tasks, user } from '../../modules';
import Generic from './Generic';

interface StateProps {
  taskName: string;
  steps: string[];
  tips: string;
}

interface ActionProps {
  completeTask: (id: string) => void;
}

interface OwnProps {
  taskId: string;
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  const task = tasks.selectors.getTask(state, ownProps);
  const thisUser = user.selectors.getState(state);
  const representatives = congress.selectors.getRepresentatives(state, ownProps);

  return {
    taskName: task.name,
    taskId: task.id,
    steps: task.templateProps.steps,
    tips: task.templateProps.tips,
  };
};

const mapDispatchToProps = {
  completeTask: tasks.actionCreators.completeTask,
};

export const GenericMultiple = connect<StateProps, ActionProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Generic);
export default GenericMultiple;
