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

interface ActionProps {}

interface OwnProps {
  taskId: number;
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  const task = tasks.selectors.getTask(ownProps.taskId);
  const thisUser = user.selectors.getState(state);
  const senators = congress.selectors.getSenators(state, ownProps);

  return {
    taskName: task.name,
    requestedAction: task.issue.requestedAction,
    callList: senators.map(senator => ({ name: senator.commonName, phoneNumbers: senator.phoneNumbers })),
    scripts: task.templateProps.scripts,
  };
};

export const CallSenate = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(Call);
export default CallSenate;
