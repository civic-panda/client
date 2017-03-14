// import * as React from 'react';
// import { connect } from 'react-redux';

// import { loadCommittee } from '../../util/api';
// import { AppState, congress, tasks, user } from '../../modules';
// import Call from './Call';

// interface StateProps {
//   taskName: string;
//   committee: string;
//   subcommittee?: string;
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

// interface State {
//   isLoading: boolean;
//   callList: {
//     list: { name: string, number: string }[];
//   };
// }

// class CallDataLoader extends React.Component<StateProps & ActionProps & OwnProps, State> {
//   public constructor(props: StateProps & ActionProps & OwnProps) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       callList: {
//         list: [],
//       }
//     }
//   }

//   public componentDidMount() {
//     this.loadData();
//   }

//   public loadData = async () => {
//     const data = await loadCommittee(this.props.committee, this.props.subcommittee);
//     const callList = data.members.map(member => {
//       const latestTerm = member.terms.slice(-1).pop();
//       const title = latestTerm.type === 'rep' ? 'Representative' : 'Senator';
//       return {
//         name: `${title} ${member.name.officialFull}`,
//         phoneNumbers: [latestTerm.phone],
//       }
//     })
//     this.setState({ isLoading: false, callList: { list: callList } });
//   }

//   public render() {
//     return this.state.isLoading
//       ? (<div>Loading Task...</div>)
//       : (<Call callList={this.state.callList} {...this.props} />);
//   }
// }

// const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
//   const task = tasks.selectors.getTask(state, ownProps);

//   return {
//     taskName: task.name,
//     taskId: task.id,
//     committee: task.templateProps.committee,
//     subcommittee: task.templateProps.subcommittee,
//     requestedAction: task.templateProps.requestedAction,
//     petitionScript: task.templateProps.petitionScript,
//     thankYouScript: task.templateProps.thankYouScript,
//   };
// };

// const mapDispatchToProps = {
//   completeCall: tasks.actionCreators.completeTask,
// };

// export const CallCommittee = connect<StateProps, ActionProps, OwnProps>(mapStateToProps, mapDispatchToProps)(CallDataLoader);
// export default CallCommittee;
