import * as React from 'react';

import { Button, Link, Text } from '../ui';

interface Props {};

interface State {};

export class AboutPage extends React.Component<Props, State> {
  public render() {
    return (
      <div>
        <Text
          type={'header'}
          text={'About Page'}
        />
      </div>
    );
  }
}

export default AboutPage;
