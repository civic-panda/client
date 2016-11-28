import * as React from 'react';

import { Button, Text } from '../ui';

interface SplashPageProps {};

interface SplashPageState {};

export class SplashPage extends React.Component<SplashPageProps, SplashPageState> {
  public render() {
    return (
      <div>
        <Text size={'xl'}>
          Your Political Action Cheat Sheet
        </Text>
        <div>
          Address Picker
          <Button text={'Button'} onClick={(event) => console.log(event)} />
        </div>
      </div>
    );
  }
}

export default SplashPage;
