import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { AppState, tasks, causes } from '../../modules';

import './call.scss';

import { Button, FadeIn, Icon, Link, Text, Toggle } from '../ui';

interface Props {
  taskName: string;
  taskId: string;
  completeTask: (id: string) => void;
  steps: string[];
  tips: string;
  task: tasks.Task;
  cause: causes.Cause;
  templateProps: {
    embedUrl: string;
  };
};

interface State {
  currentStep: number;
};

class IframeComponent extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      currentStep: 0,
    };
  }

  public nextStep = () => {
    const newState: State = { currentStep: this.state.currentStep + 1 };
    this.setState(newState);
  }

  public prevStep = () => {
    const newState: State = { currentStep: this.state.currentStep - 1 };
    this.setState(newState);
  }

  public render() {
    return (
      <div className={'task row row--padded'}>
        <div className={'task__body col--1-1 col--2-3@lg'}>
          <iframe
            src={this.props.task.templateProps.embedUrl}
            style={{ width: '100%', height: '800px' }}
          >
          </iframe>
          <Link
            text={'Complete Task'}
            link={`/causes/${this.props.cause.name}/tasks`}
            onClick={() => this.props.completeTask(this.props.taskId)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: Props) => {
  const task = tasks.selectors.getTask(state, ownProps);
  const cause = causes.selectors.getCauseById(task.causeId)(state);

  return {
    task,
    cause,
  };
};

const mapDispatchToProps = {
  completeTask: tasks.actionCreators.completeTask,
};

export const Iframe = connect(mapStateToProps, mapDispatchToProps)(IframeComponent);
