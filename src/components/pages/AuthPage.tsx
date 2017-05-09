import * as React from 'react';
import * as Redux from 'react-redux';
import * as Forms from 'redux-form';
import { browserHistory } from 'react-router';

import { AppState, user } from '../../modules';
import { Button, Text } from '../ui'
import { LogIn, SignUp } from '../forms';

interface Props {
  userId: string,
  load(id: string): any,
  isLoggedIn: boolean,
}

interface State {
  showLogin: boolean;
}

class Auth extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showLogin: true,
    }
  }

  public componentWillReceiveProps = (nextProps: Props) => {
    if (!this.props.userId && nextProps.userId) {
      this.props.load(nextProps.userId);
    }

    if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      browserHistory.push('/dashboard')
    }
  }

  private toggleForm = () => {
    this.setState({ showLogin: !this.state.showLogin });
  }

  public render() {
    return (
      <div
        style={{
          margin: '3rem auto 2rem auto',
          padding: '4rem',
          border: 'solid 1rem #2B63FF',
          maxWidth: '600px',
        }}
      >
        <Text
          text={this.state.showLogin ? 'Sign in to your account' : 'Create a new account'}
          type={'header'}
          size={'lg'}
          displayBlock
          bottomMargin
        />
        {this.state.showLogin
          ? (
            <div>
              <LogIn />
              <br />
              <Text text={'Create an account'} onClick={this.toggleForm} />
            </div>
          )
          : (
            <div>
              <SignUp />
              <br />
              <Text text={'Already have an account?'} onClick={this.toggleForm} />
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state: AppState) => ({
  userId: user.selectors.userId(state),
  isLoggedIn: user.selectors.isLoggedIn(state),
})

const mapDispatchToProps = {
  load: user.actionCreators.load,
}

export const AuthPage = Redux.connect(mapStateToProps, mapDispatchToProps)(Auth);