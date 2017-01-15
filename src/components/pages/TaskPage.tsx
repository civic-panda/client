import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { AppState, issues, tasks } from '../../modules';
import { TaskDetails } from '../task';
import * as templates from '../task-templates';
import { Icon, Text } from '../ui';
import './task-page.scss';

interface Props {
  params: {
    taskId: string;
  };
};

interface StateProps {
  issue: issues.Issue;
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
              <Link to={`/causes/${this.props.issue.name.split(' ').join('-')}`}>
                <Text
                  text={this.props.issue.name}
                  type={'label'}
                  bottomMargin
                  displayBlock
                />
              </Link>
              <Text
                text={this.props.task.name}
                size={'lg'}
                type={'header'}
                bottomMargin
                displayBlock
              />
              <Link to={`/causes/${this.props.issue.id}`}>
                <Icon type={'info'} encircle inline />
                <Text
                  text={'Why is this important?'}
                  type={'label'}
                  underline
                />
              </Link>
            </div>
            <div className="details-container u-hide@lt-lg col--1-3">
              <TaskDetails task={this.props.task} darkBackground />
            </div>
          </div>
        </div>
        {
          Template
            ? (<Template taskId={this.props.params.taskId} />)
            : (<NoTemplate {...this.props} />)
        }
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: Props) => {
  const currentTask = tasks.selectors.getTask(state, { taskId: ownProps.params.taskId });
  const currentIssue = issues.selectors.getIssue(state, { issueId: currentTask.issue });

  return {
    task: currentTask,
    issue: currentIssue,
  };
};

const ConnectedPage = connect<StateProps, {}, Props>(mapStateToProps)(TaskPage);

export {
  ConnectedPage as TaskPage,
}
