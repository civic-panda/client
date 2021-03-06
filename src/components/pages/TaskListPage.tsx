import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, user } from '../../modules';
import { TaskListContainer, TaskMapContainer } from '../task';
import { Text } from '../ui';
import './task-page.scss';

interface State {};

interface StateProps {
  location: user.Location;
}

interface ActionProps {}

interface OwnProps {
  currentRoute: string;
}

class TaskListP extends React.Component<StateProps & ActionProps & OwnProps, State> {
  public render() {
    return (
      <div className="task-page">
        <div className={'task__header'}>
          <div className="row row--padded" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="col--1-1 col--2-3@lg">
              <Text
                text={'Your task list'}
                color={'inverse'}
                size={'lg'}
                bottomMargin
                displayBlock
              />
              <Text
                text={`
                 ${this.props.location.name},
                 ${this.props.location.state}
                 ${this.props.location.district > 0 ? 'District ' + this.props.location.district : 'At-Large'}
               `}
                type={'header'}
                color={'inverse'}
                displayBlock
              />
            </div>
          </div>
        </div>
        <div className={'row row--padded'}>
          <div className="col--1-1 col--2-3@lg">
            <TaskListContainer />
          </div>
          <div className="u-hide@lt-lg col--1-3">
            <TaskMapContainer />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  location: user.selectors.getLocation(state),
});

export const TaskListPage = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(TaskListP);
export default TaskListPage;
