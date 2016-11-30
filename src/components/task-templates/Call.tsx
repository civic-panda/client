import * as React from 'react';

import { Button, Link, Text } from '../ui';

interface CallProps {
  taskName: string;
  callList: { name: string, phoneNumbers: string[] }[];
  requestedAction: string;
  scripts: {
    petition: string;
    thankYou: string;
  };
};

interface CallState {
  currentStep: number;
  calleeStance: boolean;
};

export class Call extends React.Component<CallProps, CallState> {
  public constructor(props: CallProps) {
    super(props);
    this.state = {
      currentStep: 0,
      calleeStance: undefined,
    };
  }

  public nextStep = () => this.setState({ calleeStance: undefined, currentStep: this.state.currentStep + 1 });
  public prevStep = () => this.setState({ calleeStance: undefined, currentStep: this.state.currentStep - 1 });
  public setYea = () => this.setState({...this.state, calleeStance: true });
  public setNea = () => this.setState({...this.state, calleeStance: false });

  public render() {
    const callee = this.props.callList[this.state.currentStep];

    return (
      <div>
        <div>
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
          <div>
            <Button text={'YES'} onClick={this.setYea} />
            <Button text={'NO'} onClick={this.setNea} />
          </div>
          {this.state.calleeStance !== undefined &&
            <div>
              <Text
                text={`2. Call to ${this.state.calleeStance ? 'thank' : 'petition'} ${callee.name}`}
                displayBlock
                bottomMargin
              />
              <Text
                text={callee.phoneNumbers.join(' ')}
                displayBlock
                bottomMargin
              />
              <Text
                size={'p'}
                type={'header'}
                color={'accent'}
                text={`Sample transcript`}
                displayBlock
                bottomMargin
              />
              <Text
                text={this.state.calleeStance ? this.props.scripts.thankYou : this.props.scripts.petition}
                displayBlock
                bottomMargin
              />
              {(this.state.currentStep > 0) &&
                <Button text={'Prev'} onClick={this.prevStep} />
              }
              {(this.state.currentStep < this.props.callList.length - 1) &&
                <Button text={'Next'} onClick={this.nextStep} />
              }
              {(this.state.currentStep === this.props.callList.length - 1) &&
                <Link text={'Done'} link={'/tasks'} />
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Call;
