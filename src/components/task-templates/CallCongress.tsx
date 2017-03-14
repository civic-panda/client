// import * as React from 'react';
// import { connect } from 'react-redux';

// import { AppState, congress, tasks, user } from '../../modules';
// import Call from './Call';

// interface StateProps {
//   taskName: string;
//   callList: { name: string, phoneNumbers: string[] }[];
//   requestedAction: string;
//   petitionScript: string;
//   thankYouScript: string;
// }

// interface ActionProps {
//   completeCall: (id: string) => void;
// }

// interface OwnProps {
//   taskId: string;
// }

// const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
//   const task = tasks.selectors.getTask(state, ownProps);
//   const thisUser = user.selectors.getState(state);
//   const representatives = congress.selectors.getRepresentatives(state, ownProps);
//   const senators = congress.selectors.getSenators(state, ownProps);
//   const callList = [
//     ...senators.map(senator => ({
//       name: `Senator ${senator.name.officialFull}`,
//       phoneNumbers: [senator.terms.slice(-1).pop().phone],
//     })),
//     ...representatives.map(rep => ({
//       name: `Representative ${rep.name.officialFull}`,
//       phoneNumbers: [rep.terms.slice(-1).pop().phone],
//     })),
//   ];

//   return {
//     taskName: task.name,
//     taskId: task.id,
//     requestedAction: task.templateProps.requestedAction,
//     callList,
//     petitionScript: task.templateProps.petitionScript,
//     thankYouScript: task.templateProps.thankYouScript,
//   };
// };

// const mapDispatchToProps = {
//   completeCall: tasks.actionCreators.completeTask,
// };

// export const CallCongress = connect<StateProps, ActionProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Call);
// export default CallCongress;
