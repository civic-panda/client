import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, causes, user } from '../../modules';
import { requestDemo } from '../../util/api';
import { Button, FontAlignment, FontColor, Input, Text } from '../ui';
import './demo-request.scss';

interface State {
  email: string;
  submitted: boolean;
  loading: boolean;
  error: string;
}

class EmailSignUp extends React.Component<{}, State> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      email: '',
      submitted: false,
      loading: false,
      error: null,
    };
  }

  public setEmail = (event: any) => {
    const newState = { ...this.state, email: event.target.value };
    this.setState(newState);
  }

  public subscribe = async () => {
    if (this.state.email.length) {
      this.setState({ ...this.state, loading: true });
      try {
        await requestDemo({ email: this.state.email });
        this.setState({ ...this.state, submitted: true });
      } catch (e) {
        this.setState({ ...this.state, error: 'Error requesting demo, please try again later.' });
      } finally {
        this.setState({ ...this.state, loading: false });
      }
    }
  }

  public render() {
    return this.state.submitted
      ? (
        <Text
          text={`You'll hear from us soon!`}
          size={'h3'}
          displayBlock
          bottomMargin
        />
      ) : (
        <div className="col col--1-1">
          <form onSubmit={(e) => { this.subscribe(); e.preventDefault(); }}>
            <Input
              type={'text'}
              onChange={this.setEmail}
              placeholder={'Your email address'}
            />
            <Button
              text={'Request demo'}
              onClick={this.subscribe}
              loading={this.state.loading}
            />
            {this.state.error && (
              <Text text={this.state.error} size={'small'} displayBlock bottomMargin />
            )}
          </form>
        </div>
      );
  }
}

export default EmailSignUp;
