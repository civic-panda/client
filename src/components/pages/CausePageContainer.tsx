import { connect } from 'react-redux';

import { AppState, causes, storage, tasks } from '../../modules';
import CausePage, { Props, StateProps } from './CausePage';

interface OwnProps {
  params: {
    causeName: string;
  };
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  const currentCause = causes.selectors.getCauseByParam(state, { param: ownProps.params.causeName });
  const causeList = causes.selectors.getList(state);
  const taskList = tasks.selectors.getList(state);
  // TODO: this is a hack since loading for issues is not in the state
  const isLoaded = storage.selectors.isLoaded(state) && causeList.length > 0 && taskList.length > 0;

  return {
    isLoaded,
    cause: currentCause,
    parentCause: causes.selectors.getCauseById(currentCause.parent)(state),
    childCauses: causes.selectors.getChildCauses(currentCause.id)(state),
    tasks: isLoaded ? taskList.filter(task => task.causeId === currentCause.id) : [],
  };
};

export const CausePageContainer = connect<StateProps, {}, OwnProps>(mapStateToProps)(CausePage);
