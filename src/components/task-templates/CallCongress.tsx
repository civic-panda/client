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
  const senators = congress.selectors.getSenators(state, ownProps);
  const callList = [
    ...senators.map(senator => ({ name: `Senator ${senator.commonName}`, phoneNumbers: senator.phoneNumbers })),
    ...representatives.map(rep => ({ name: `Representative ${rep.commonName}`, phoneNumbers: rep.phoneNumbers })),
  ];

  return {
    taskName: task.name,
    taskId: task.id,
    requestedAction: task.templateProps.requestedAction,
    callList,
    scripts: task.templateProps.scripts,
  };
};

const mapDispatchToProps = {
  completeCall: tasks.actionCreators.completeTask,
};

export const CallCongress = connect<StateProps, ActionProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Call);
export default CallCongress;
