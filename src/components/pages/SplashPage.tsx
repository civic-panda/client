import * as React from 'react';

import AddressPicker from '../AddressPicker';
import IssuePicker from '../IssuePicker';
import { Button, Link, Text } from '../ui';
import './splash-page.scss';

interface SplashPageProps {};

interface SplashPageState {};

export class SplashPage extends React.Component<SplashPageProps, SplashPageState> {
  public render() {
    return (
      <div className="splash-page">
        <div className="splash-hero ">
          <Text
            className={'hero-text col--1-1'}
            align={'center'}
            size={'xxl'}
            type={'header'}
            color={'inverse'}
            text={'WolfPAC'}
            bottomMargin
            displayBlock
          />
          <Text
            className={'hero-text col--1-1'}
            align={'center'}
            size={'lg'}
            type={'header'}
            color={'inverse'}
            text={'Your political action cheat sheet.'}
            displayBlock
          />
        </div>
        <div>
          <AddressPicker />
          <div className="col--1-1 col--padded">
            <Text
              text={'The Issues'}
              size={'h1'}
              type={'header'}
              align={'center'}
              displayBlock
              bottomMargin
            />
            <Text
              text={'(Click to select and deselect)'}
              type={'header'}
              size={'h4'}
              align={'center'}
              displayBlock
              bottomMargin
            />
          </div>
          <IssuePicker />
          <AddressPicker style={'light'} />
        </div>
      </div>
    );
  }
}

export default SplashPage;
