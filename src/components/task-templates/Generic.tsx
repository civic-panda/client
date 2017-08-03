import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './call.scss';

import { Button, FadeIn, Icon, Link, Text, Toggle } from '../ui';

interface Props {
  taskName: string;
  taskId: string;
  cause: any;
  completeTask: (id: string) => void;
  steps: string[];
  tips: string;
};

interface State {
  currentStep: number;
};

export class Generic extends React.Component<Props, State> {
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

  public renderStep = () => (
    <div>
      <Text bottomMargin displayBlock>
        <p
          dangerouslySetInnerHTML={{
            __html: this.props.steps[this.state.currentStep]
          }}
        />
      </Text>

      {(this.state.currentStep < this.props.steps.length - 1) &&
        <Button text={'Next'} onClick={this.nextStep} />
      }
      {(this.state.currentStep === this.props.steps.length - 1) && (
        <Link
          text={'Complete Task'}
          link={`/causes/${this.props.cause.name}/tasks?modal=task-completed`}
          onClick={() => this.props.completeTask(this.props.taskId)}
        />
      )}
    </div>
  )

  public render() {
    return (
      <div className={'task row row--padded'}>
        <div className={'task__body col--1-1 col--2-3@lg'}>
          <Text
            size={'h4'}
            type={'header'}
            color={'accent'}
            text={`Step ${this.state.currentStep + 1} of ${this.props.steps.length}`}
            displayBlock
            bottomMargin
          />
          {this.renderStep()}
        </div>
      </div>
    );
  }
}

export default Generic;
