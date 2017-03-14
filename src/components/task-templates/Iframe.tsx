import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';

import { AppState, tasks } from '../../modules';

import './call.scss';

import { Button, FadeIn, Icon, Link, Text, Toggle } from '../ui';

interface Props {
  taskName: string;
  taskId: string;
  completeTask: (id: string) => void;
  steps: string[];
  tips: string;
  task: any;
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
        </div>
        <div className={'task__notes u-hide@lt-lg col--1-3'}>
          <Text
            size={'h4'}
            type={'header'}
            color={'accent'}
            text={`Always remember...`}
            displayBlock
            bottomMargin
          />
          <div dangerouslySetInnerHTML={{
            __html: this.props.tips
          }}></div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: Props) => {
  const task = tasks.selectors.getTask(state, ownProps);

  return {
    task,
  };
};

export const Iframe = connect(mapStateToProps)(IframeComponent);
