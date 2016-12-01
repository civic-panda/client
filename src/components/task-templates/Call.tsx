import * as React from 'react';

import { Button, Link, Text, Toggle } from '../ui';

interface CallProps {
  taskName: string;
  callList: { name: string, phoneNumbers: string[] }[];
  requestedAction: string;
  scripts: {
    petition: string;
    thankYou: string;
  };
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
                    <div key={phoneNumber} className="col--1-4">
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
                <Text
                  text={this.state.calleeStance === 'yea' ? this.props.scripts.thankYou : this.props.scripts.petition}
                  displayBlock
                />
              </Text>
              {(this.state.currentStep < this.props.callList.length - 1) &&
                <Button text={'Next'} onClick={this.nextStep} />
              }
              {(this.state.currentStep === this.props.callList.length - 1) &&
                <Link text={'Done'} link={'/tasks'} />
              }
            </div>
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
        </div>
      </div>
    );
  }
}

export default Call;
