import { connect } from 'react-redux';

import { AppState, issues, storage, tasks } from '../../modules';
import CausePage, { Props, StateProps } from './CausePage';

interface OwnProps {
  params: {
    causeName: string;
  };
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  const currentCause = issues.selectors.getIssueByParam(state, { param: ownProps.params.causeName });

  return {
    isLoaded: storage.selectors.isLoaded(state),
    cause: currentCause,
    tasks: tasks.selectors.getList(state).filter(task => task.issue === currentCause.id),
  };
};

export const CausePageContainer = connect<StateProps, {}, OwnProps>(mapStateToProps)(CausePage);
