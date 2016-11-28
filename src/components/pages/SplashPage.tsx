import * as React from 'react';

import { Button, Link, Text } from '../ui';
import './splash-page.scss';

interface SplashPageProps {};

interface SplashPageState {};

export class SplashPage extends React.Component<SplashPageProps, SplashPageState> {
  public render() {
    return (
      <div>
        <div className="splash-hero">
          <Text
            size={'xl'}
            type={'header'}
            color={'inverse'}
            text={'Your Political Action Cheat Sheet'}
          />
        </div>
        <div>
          Address Picker
          <Link text={'Button'} link={'tasks'} />
        </div>
      </div>
    );
  }
}

export default SplashPage;
