import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, congress, tasks, user } from '../../modules';
import Call from './Call';

interface StateProps {
  taskName: string;
  callList: { name: string, phoneNumbers: string[] }[];
  requestedAction: string;
  scripts: {
    petition: string;
    thankYou: string;
  };
}

interface ActionProps {
  completeCall: (id: number) => void;
}

interface OwnProps {
  taskId: number;
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  const task = tasks.selectors.getTask(state, ownProps);
  const thisUser = user.selectors.getState(state);
  const representatives = congress.selectors.getRepresentatives(state, ownProps);

  return {
    taskName: task.name,
    taskId: task.id,
    requestedAction: task.issue.requestedAction,
    callList: representatives.map(rep => ({ name: rep.commonName, phoneNumbers: rep.phoneNumbers })),
    scripts: task.templateProps.scripts,
  };
};

const mapDispatchToProps = {
  completeCall: tasks.actionCreators.completeTask,
};

export const CallHouse = connect<StateProps, ActionProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Call);
export default CallHouse;
