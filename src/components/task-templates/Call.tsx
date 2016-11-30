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

  public render() {
    const callee = this.props.callList[this.state.currentStep];

    return (
      <div>
        <Text
          size={'h4'}
          type={'header'}
          color={'accent'}
        >
          Step {this.state.currentStep + 1} of {this.props.callList.length}: Call {callee.name}
        </Text>
        <Text>
          1. Has {callee.name} {this.props.requestedAction}?
          [YES][NO]
        </Text>
        <Text>
          2. Call to {this.state.calleeStance ? 'thank' : 'petition'} {callee.name}
        </Text>
      </div>
    );
  }
}

export default Call;
