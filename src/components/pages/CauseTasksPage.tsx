import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, user, issues } from '../../modules';
import { TaskListContainer, TaskMapContainer } from '../task';
import { Text } from '../ui';
import './task-page.scss';

interface State {};

interface StateProps {
  cause: issues.Issue;
  location: user.Location;
}

interface ActionProps {}

interface OwnProps {
  currentRoute: string;
  params: {
    causeName: string;
  }
}

class CauseTasks extends React.Component<StateProps & ActionProps & OwnProps, State> {
  public render() {
    return (
      <div className="task-page">
        <div className={'task__header'}>
          <div className="row row--padded" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="col--1-1 col--2-3@lg">
              <Text
                text={`
                 ${this.props.location.name},
                 ${this.props.location.state}
                 ${this.props.location.district > 0 ? 'District ' + this.props.location.district : 'At-Large'}
               `}
                type={'label'}
                displayBlock
              />
              <Text
                text={`${this.props.cause.name} Task List`}
                size={'lg'}
                type={'header'}
                displayBlock
              />
            </div>
          </div>
        </div>
        <div className={'row row--padded'}>
          <div className="col--1-1">
            <TaskListContainer causeId={this.props.cause.id} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  cause: issues.selectors.getIssueByParam(state, { param: ownProps.params.causeName }),
  location: user.selectors.getLocation(state),
});

export const CauseTasksPage = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(CauseTasks);
export default CauseTasks;
