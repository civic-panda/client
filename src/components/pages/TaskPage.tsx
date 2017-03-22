import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { AppState, causes, tasks } from '../../modules';
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
  cause: causes.Cause;
  parentCause?: causes.Cause;
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
    console.log('template', templates, Template, this.props.task, this.props.task.template);
    return (
      <div className={'task-page'}>
        <div className={'task__header'}>
          <div className="row row--padded" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="col--1-1 col--2-3@lg">
              <span style={{ whiteSpace: 'nowrap' }}>
                {this.props.parentCause && (
                  <span>
                    <Link to={`/causes/${this.props.parentCause.urlFormattedName}`}>
                      <Text
                        text={this.props.parentCause.name}
                        type={'label'}
                        bottomMargin
                      />
                    </Link>
                    <Text
                      text={'  >  '}
                      type={'label'}
                      bottomMargin
                    />
                  </span>
                )}
                <Link to={`/causes/${this.props.cause.urlFormattedName}`}>
                  <Text
                    text={this.props.cause.name}
                    type={'label'}
                    bottomMargin
                  />
                </Link>
              </span>
              <Text
                text={this.props.task.name}
                size={'lg'}
                type={'header'}
                bottomMargin
                displayBlock
              />
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
  const currentCause = causes.selectors.getCause(state, { causeId: currentTask.causeId });
  const parentCause = currentCause.parent
    ? causes.selectors.getCause(state, { causeId: currentCause.parent })
    : undefined;

  return {
    task: currentTask,
    cause: currentCause,
    parentCause,
  };
};

const ConnectedPage = connect<StateProps, {}, Props>(mapStateToProps)(TaskPage);

export {
  ConnectedPage as TaskPage,
}
