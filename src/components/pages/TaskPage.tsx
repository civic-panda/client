import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, tasks } from '../../modules';
import { TaskDetails } from '../task';
import * as templates from '../task-templates';
import { Text } from '../ui';
import './task-page.scss';

interface Props {
  params: {
    taskId: string;
  };
};

interface StateProps {
  task: tasks.Task;
}

interface State {};

const NoTemplate = (props: Props & StateProps) => {
  console.warn('no template found', props);
  return (<div>nope</div>);
};

class TaskPage extends React.Component<Props & StateProps, State> {
  public render() {
    const Template = this.props.task ? templates[this.props.task.template] : null;

    return (
      <div className={'task-page'}>
        <div className={'task__header'}>
          <div className="row row--padded" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="col--1-1 col--2-3@lg">
              <Text text={this.props.task.issue.name} color={'inverse'} bottomMargin displayBlock />
              <Text text={this.props.task.name} color={'inverse'} size={'lg'} displayBlock />
            </div>
            <div className="details-container u-hide@lt-lg col--1-3">
              <TaskDetails task={this.props.task} darkBackground />
            </div>
          </div>
        </div>
        {
          Template
            ? (<Template taskId={parseInt(this.props.params.taskId, 10)} />)
            : (<NoTemplate {...this.props} />)
        }
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: Props) => ({
  task: tasks.selectors.getTask(state, { taskId: parseInt(ownProps.params.taskId, 10) }),
});

const ConnectedPage = connect<StateProps, {}, Props>(mapStateToProps)(TaskPage);

export {
  ConnectedPage as TaskPage,
}
