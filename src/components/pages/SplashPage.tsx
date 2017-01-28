import * as React from 'react';

import AddressPicker from '../AddressPicker';
import EmailSignUp from '../EmailSignUp';
import CausePicker from '../CausePicker';
import { Button, Link, Text } from '../ui';
import './splash-page.scss';

interface Props {};

interface State {
  titleText: string;
};

export class SplashPage extends React.Component<Props, State> {
  public interval: any;
  public counter: number;

  public constructor(props: Props) {
    super(props);
    this.counter = 0;
    this.state = {
      titleText: 'this',
    };
  }

  public componentDidMount() {
    // const labels = ['global warming', 'campaign finance', 'this', 'this' ];
    // this.interval = setInterval(() => {
    //   this.setState({ titleText: labels[this.counter % labels.length] });
    //   this.counter ++;
    // }, 2200);
  }

  public componentWillUnMount() {
    // clearInterval(this.interval);
  }

  public render() {
    return (
      <div className="splash-page">
        <div className="splash-hero ">
          <Text className="hero-text col--1-1" align={'center'} displayBlock bottomMargin>
            <Text
              align={'center'}
              size={'xxl'}
              type={'header'}
              color={'inverse'}
              text={`Act on [`}
              bottomMargin
            />
            <Text
              align={'center'}
              size={'xxl'}
              type={'header'}
              color={'inverse'}
              text={`${this.state.titleText}`}
              bottomMargin
            />
            <Text
              align={'center'}
              size={'xxl'}
              type={'header'}
              color={'inverse'}
              text={`]`}
              bottomMargin
            />
          </Text>
          <Text
            className={'hero-text col--1-1'}
            align={'center'}
            size={'lg'}
            type={'header'}
            color={'inverse'}
            text={'Your political action cheat sheet. (beta)'}
            displayBlock
          />
        </div>
        <div>
          <AddressPicker />
          <div className="col--1-1 col--padded">
            <Text
              text={'The Causes'}
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
          <CausePicker />
          <AddressPicker style={'light'} />
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
                <EmailSignUp align={'center'} color={'inverse'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
