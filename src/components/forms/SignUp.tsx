import * as React from 'react';
import * as Redux from 'react-redux';
import * as Forms from 'redux-form';

import { user } from '../../modules';
import { Button, Text } from '../ui'
import { Input } from './Input';

const SignUpForm = (props: Forms.FormProps<any, any, any>) => (
  <form onSubmit={props.handleSubmit}>
    <Forms.Field
      name={'email'}
      label={'Email'}
      component={Input}
      type={'text'}
    />
    <br />
    <Forms.Field
      name={'password'}
      label={'Password'}
      component={Input}
      type={'password'}
    />
    <br />
    <br />
    {props.error && (
      <Text
        size={'small'}
        type={'label'}
        color={'accent'}
        align={'left'}
        bottomMargin
        displayBlock
      >
        {props.error}
      </Text>
    )}
    <Button
      text={'Sign Up'}
      size={'large'}
    />
  </form>
)

const SignUpReduxForm = Forms.reduxForm({ form: 'signup' })(SignUpForm)
const mapStateToProps = () => ({})
const mapDispatchToProps = { onSubmit: user.actionCreators.signUp }
export const SignUp = Redux.connect(mapStateToProps, mapDispatchToProps)(SignUpReduxForm)