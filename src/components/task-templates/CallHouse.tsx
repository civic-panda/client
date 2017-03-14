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

//   return {
//     taskName: task.name,
//     taskId: task.id,
//     requestedAction: task.templateProps.requestedAction,
//     callList: [
//       ...representatives.map(rep => ({
//         name: `Representative ${rep.name.officialFull}`,
//         phoneNumbers: [rep.terms.slice(-1).pop().phone],
//       })),
//     ],
//     petitionScript: task.templateProps.petitionScript,
//     thankYouScript: task.templateProps.thankYouScript,
//   };
// };

// const mapDispatchToProps = {
//   completeCall: tasks.actionCreators.completeTask,
// };

// export const CallHouse = connect<StateProps, ActionProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Call);
// export default CallHouse;
