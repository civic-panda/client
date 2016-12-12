import * as React from 'react';

import { Button, Input, Text } from '../ui';
import './email-sign-up.scss';

export default class EmailSignUp extends React.Component<{}, {}> {
  public render() {
   return (
      <div className="email-sign-up">
        <div className="row row--padded row--centered">
          <div className="col--1-1">
            <Text
              text={`Stay in the loop`}
              type={'header'}
              color={'inverse'}
              align={'center'}
              size={'lg'}
              displayBlock
              bottomMargin
            />
            <Text
              text={`Give us your email and well send you an update as new tasks become available.`}
              color={'inverse'}
              align={'center'}
              displayBlock
              bottomMargin
            />
            <Input type={'text'} onChange={() => null} placeholder={'Your email address'} />
            <Button text={'Get updates'} />
          </div>
        </div>
      </div>
    );
  }
}
