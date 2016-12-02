import * as React from 'react';

import { Button, Link, Text } from '../ui';

interface Props {};

interface State {};

export class FAQPage extends React.Component<Props, State> {
  public render() {
    return (
      <div>
        <Text
          type={'header'}
          text={'FAQ Page'}
        />
      </div>
    );
  }
}

export default FAQPage;
