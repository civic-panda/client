import * as React from 'react';

import AddressPicker from '../AddressPicker';
import './about-page.scss';

import { Button, Link, Text } from '../ui';

interface Props {};

interface State {};

export class AboutPage extends React.Component<Props, State> {
  public render() {
    return (
      <div className="about-page">
        <div className="text-container">
          <Text
            type={'header'}
            text={'About Us'}
            align={'center'}
            size={'h1'}
            color={'inverse'}
            displayBlock
            bottomMargin
          />
          <Text
            align={'left'}
            color={'inverse'}
            displayBlock
            bottomMargin
            text={`We want to turn grassroots energy into informed political action.`}
          />
          <Text
            align={'left'}
            color={'inverse'}
            displayBlock
            bottomMargin
            text={`
              We believe that legislators need to be held accountable to their constituents. Currently,
              only 1/3 of eligible voters turn out for midterm elections. Many don't know the names of
              their representatives. This enables congress to pass unpopular special-interest legislation
              and sit idle on urgent issues that matter to voters.
            `}
          />
          <Text
            align={'left'}
            color={'inverse'}
            displayBlock
            text={`
              This site is a simple, comprehensive way for citizens contact their legislators. Our goal is
              to equip citizens with balanced facts, resources, and information so they can call their
              reps with confidence
            `}
          />
        </div>
        <div className="pin-to-bottom">
          <AddressPicker />
        </div>
      </div>
    );
  }
}

export default AboutPage;
