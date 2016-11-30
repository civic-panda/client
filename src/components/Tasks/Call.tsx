import * as React from 'react';

import { Button, Link, Text } from '../ui';
import './splash-page.scss';

interface CallProps {};

interface CallState {};

export class Call extends React.Component<CallProps, CallState> {
  public render() {
    return (
      <div>
        <Text
          className={'hero-text'}
          size={'lg'}
          type={'header'}
          color={'inverse'}
          text={'Your political action cheat sheet.'}
        />
      </div>
    );
  }
}

export default Call;
