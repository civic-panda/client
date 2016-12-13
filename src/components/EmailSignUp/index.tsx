import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, issues, user } from '../../modules';
import { subscribeEmail } from '../../util/api';
import { Button, FontAlignment, FontColor, Input, Text } from '../ui';
import './email-sign-up.scss';

interface State {
  email: string;
}

interface OwnProps {
  color?: FontColor;
  align?: FontAlignment;
}

interface StateProps {
  issues: string[];
  user: user.UserState;
}

interface DispatchProps {
  subscription: (email: string) => Redux.Action;
  subscriptionAttempt: () => Redux.Action;
  subscriptionFailure: () => Redux.Action;
}

class EmailSignUp extends React.Component<StateProps & DispatchProps & OwnProps, State> {
  public constructor(props: StateProps & DispatchProps & OwnProps) {
    super(props);
    this.state = {
      email: '',
    };
  }

  public setEmail = (event: any) => {
    const newState = { email: event.target.value };
    this.setState(newState);
  }

  public subscribe = async () => {
    if (this.state.email.length) {
      this.props.subscriptionAttempt();
      try {
        await subscribeEmail(this.state.email, this.props.issues);
        this.props.subscription(this.state.email);
      } catch (e) {
        this.props.subscriptionFailure();
      }

    }
  }

  public render() {
   return this.props.user.isSubscribed
    ? (
      <Text
        text={`
          Your email ${this.props.user.email} will be notified as soon as new tasks become available.
        `}
        size={'h4'}
        color={this.props.color}
        align={this.props.align}
        displayBlock
        bottomMargin
      />
    ) : (
      <span>
        <Text
          text={`Give us your email and well send you an update as new tasks become available.`}
          color={this.props.color}
          align={this.props.align}
          displayBlock
          bottomMargin
        />
        <Input
          type={'text'}
          onChange={this.setEmail}
          placeholder={'Your email address'}
        />
        <Button
          text={'Get updates'}
          onClick={this.subscribe}
          loading={this.props.user.isSubscribed === 'loading'}
          disabled={this.state.email.length === 0}
        />
      </span>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  issues: issues.selectors.getSubscribed(state),
  user: user.selectors.getState(state),
});

const mapDispatchToProps = {
  subscription: user.actionCreators.subscription,
  subscriptionAttempt: user.actionCreators.subscriptionAttempt,
  subscriptionFailure: user.actionCreators.subscriptionFailure,
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(EmailSignUp);
