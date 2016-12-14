import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './call.scss';

import { Button, FadeIn, Icon, Link, Text, Toggle } from '../ui';

interface CallProps {
  taskName: string;
  taskId: string;
  completeCall: (id: string) => void;
  callList: { name: string, phoneNumbers: string[] }[];
  requestedAction: string;
  petitionScript: string;
  thankYouScript: string;
};

type Stance = 'unknown' | 'yea' | 'nay';

interface CallState {
  currentStep: number;
  calleeStance: Stance;
};

export class Call extends React.Component<CallProps, CallState> {
  public constructor(props: CallProps) {
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

  public renderCallScript = (callee: { name: string, phoneNumbers: string[] }) => (
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
        {
          callee.phoneNumbers.map(phoneNumber => (
            <div key={phoneNumber} className="col--1-2 col--1-4@md">
              <Icon type={'phone'} color={'highlight'} inline />
              <Text
                text={phoneNumber}
                color={'highlight'}
                format={'Phone Number'}
                align={'left'}
                displayBlock
                bottomMargin
              />
            </div>
          ))
        }
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
        <div className={'task__notes u-hide@lt-lg col--1-3'}>
          <Text
            size={'h4'}
            type={'header'}
            color={'accent'}
            text={`Always remember...`}
            displayBlock
            bottomMargin
          />
          <ul>
            <li><p>
              Always be nice. Not only is this kind to the person doing their job at the other end of the line,
              being courteous makes you more likely to be taken seriously.
            </p></li>
            <li><p>
              Leave a voicemail. If voicemail is full, press "0." This will typically connect you to a receptionist
              who may be able to take your message or transfer you to a voicemail that isn't full.
            </p></li>
            <li><p>
              Call the national office, if you can't get through. Or to see if you can get a real person.
            </p></li>
            <li><p>
              Be prepared to give your name and your location. While they won’t always ask, reps will prioritize
              calls from their constituents.
            </p></li>
            <li><p>
              One call, one issue. The operator is likely using some kind of form to mark your call, the goal is to
              generate a high volume of calls that require the operator to check off individual boxes.
              That means it’s critical to name your issues specifically.
            </p></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Call;
