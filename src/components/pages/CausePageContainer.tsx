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
  const causeList = issues.selectors.getList(state);
  const taskList = tasks.selectors.getList(state);
  // TODO: this is a hack since loading for issues is not in the state
  const isLoaded = storage.selectors.isLoaded(state) && causeList.length > 0 && taskList.length > 0;

  return {
    isLoaded,
    cause: currentCause,
    tasks: isLoaded ? taskList.filter(task => task.issue === currentCause.id) : [],
  };
};

export const CausePageContainer = connect<StateProps, {}, OwnProps>(mapStateToProps)(CausePage);
