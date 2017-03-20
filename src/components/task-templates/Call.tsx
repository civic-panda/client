import * as React from 'react';
import { connect } from 'react-redux';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { AppState, congress, tasks } from '../../modules';
import './call.scss';

import { Button, FadeIn, Icon, Link, Text, Toggle } from '../ui';

interface OwnProps {
  taskId: string;
};

interface StateProps {
  taskName: string;
  completeCall: (id: string) => void;
  callList: { name: string, number: string }[];
  requestedAction: string;
  petitionScript: string;
  thankYouScript: string;
};

type Stance = 'unknown' | 'yea' | 'nay';

interface CallState {
  currentStep: number;
  calleeStance: Stance;
};

class CallComponent extends React.Component<OwnProps & StateProps, CallState> {
  public constructor(props: OwnProps & StateProps) {
    super(props);
    this.state = {
      currentStep: 0,
      calleeStance: 'unknown',
    };
  }

  public nextStep = () => {
    const newState: CallState = { calleeStance: 'unknown', currentStep: this.state.currentStep + 1 };
    this.setState(newState);
  }

  public prevStep = () => {
    const newState: CallState = { calleeStance: 'unknown', currentStep: this.state.currentStep - 1 };
    this.setState(newState);
  }

  public setYea = () => {
    const newState: CallState = { ...this.state, calleeStance: 'yea' };
    this.setState(newState);
  }

  public setNay = () => {
    const newState: CallState = { ...this.state, calleeStance: 'nay' };
    this.setState(newState);
  }

  public renderCallScript = (callee: { name: string, number: string }) => (
    <div>
      <Text
        text={`2. Call to ${this.state.calleeStance === 'yea' ? 'thank' : 'petition'} ${callee.name}`}
        displayBlock
        bottomMargin
      />
      <Text
        text={`\
          You can call any of their offices throughout the state,\
          no matter where you live so if you get a busy signal on one\
          just go down this list of numbers until you get through:\
        `}
        italic
        displayBlock
        bottomMargin
      />
      <div className="row">
        <div key={callee.number} className="col--1-2 col--1-4@md">
          <Icon type={'phone'} color={'highlight'} inline />
          <Text
            text={callee.number}
            color={'highlight'}
            format={'Phone Number'}
            align={'left'}
            displayBlock
            bottomMargin
          />
        </div>
      </div>
      <Text bottomMargin blockQuote displayBlock>
        <Text
          size={'p'}
          type={'header'}
          color={'accent'}
          text={`Sample transcript`}
          displayBlock
          bottomMargin
        />
        <p
          dangerouslySetInnerHTML={{
            __html: this.state.calleeStance === 'yea'
              ? this.props.thankYouScript
              : this.props.petitionScript,
          }}
        />
      </Text>
      {(this.state.currentStep < this.props.callList.length - 1) &&
        <Button text={'Next'} onClick={this.nextStep} />
      }
      {(this.state.currentStep === this.props.callList.length - 1) &&
        <Link text={'Done'} link={'/tasks'} onClick={() => this.props.completeCall(this.props.taskId)} />
      }
    </div>
  )

  public render() {
    const callee = this.props.callList[this.state.currentStep];

    return (
      <div className={'task row row--padded'}>
        <div className={'task__body col--1-1 col--2-3@lg'}>
          <Text
            size={'h4'}
            type={'header'}
            color={'accent'}
            text={`Step ${this.state.currentStep + 1} of ${this.props.callList.length}: Call ${callee.name}`}
            displayBlock
            bottomMargin
          />
          <Text
            text={`1. Has ${callee.name} ${this.props.requestedAction}?`}
            displayBlock
            bottomMargin
          />
          <Text bottomMargin displayBlock>
            <Toggle
              options={[{ name: 'YES', value: 'yea'}, { name: 'NO', value: 'nay' }]}
              select={(option: Stance) => this.setState({...this.state, calleeStance: option })}
              selected={this.state.calleeStance}
            />
          </Text>
          {this.state.calleeStance !== 'unknown' &&
            <FadeIn>{this.renderCallScript(callee)}</FadeIn>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  const task = tasks.selectors.getTask(state, ownProps);
  const nationalCallList = congress.selectors.getCallList(state);
  const stateCallList = congress.selectors.getStateCallList(state);

  const callList = task.templateProps.callList && task.templateProps.callList.type === 'state'
    ? stateCallList
    : nationalCallList;
  console.log(task.templateProps.callList, callList, stateCallList);

  return {
    taskName: task.name,
    callList: (task.templateProps.callList && task.templateProps.callList.list) ? task.templateProps.callList.list : callList,
    requestedAction: task.templateProps.requestedAction,
    petitionScript: task.templateProps.petitionScript,
    thankYouScript: task.templateProps.thankYouScript,
  };
};

export const Call = connect(mapStateToProps)(CallComponent);
