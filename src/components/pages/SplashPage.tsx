import * as React from 'react';

import AddressPicker from '../AddressPicker';
import DemoRequest from '../DemoRequest';
import CausePicker from '../CausePicker';
import { Button, Link, Text, InfoBox, Input } from '../ui';
import './splash-page.scss';

const featureImage1 = require('./feature1.png');
const featureImage2 = require('./feature2.png');
const featureImage3 = require('./feature3.png');
const capitolImage = require('./capitol.png');
const volunteersImage = require('./volunteers.png');

interface Props {};

export class SplashPage extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="splash-page">
        <div className="hero tinted-image-background">
          <div className="row row--padded">
            <div className="col col--1-1">
              <Text size={'xl'} displayBlock bottomMargin>Make change happen.</Text>
              <Text displayBlock bottomMargin>Mobilize volunteers like a big budget campaign with Act On This.</Text>
              <DemoRequest />
            </div>
          </div>
        </div>
        <div className="row row--padded">
          <div className="col col--1-1">
            <Text size={'h1'} type={'header'} horizontalRule displayBlock>What we do</Text>
            <div className="col col--1-1 product-feature">
              <div className="col col--1-1 col--1-2@md product-feature-description">
                <Text size={'h2'} type={'header'} displayBlock bottomMargin>Onboard, organize, and mobilize your volunteers</Text>
                <Text displayBlock bottomMargin>ActOnThis provides the tools for grassroots organizations to work with their volunteers the same way well-funded national campaigns do. Give your volunteers a quick and easy way to support the change you're making.</Text>
              </div>
              <div className="col col--1-1 col--1-2@md product-feature-image-container">
                <img className="product-feature-image" src={featureImage3} alt={'placeholder product feature'} />
              </div>
            </div>
            <div className="col col--1-1 product-feature">
              <div className="col col--1-1 col--1-2@md product-feature-description u-pull-right">
                <Text size={'h2'} type={'header'} displayBlock bottomMargin>Custom fit to your needs</Text>
                <Text displayBlock bottomMargin>With a wide range of ready-made tasks and lots of flexibility, you can make ActOnThis fit your needs. Whether you need volunteers to call a local representative or fill out a survey, we've got you covered.</Text>
              </div>
              <div className="col col--1-1 col--1-2@md product-feature-image-container">
                <img className="product-feature-image" src={featureImage2} alt={'placeholder product feature'} />
              </div>
            </div>
            <div className="col col--1-1 product-feature">
              <div className="col col--1-1 col--1-2@md product-feature-description">
                <Text size={'h2'} type={'header'} displayBlock bottomMargin>Reach volunteers wherever they are</Text>
                <Text displayBlock bottomMargin>Our tools are built to provide a great experience whether your volunteers are at home on their desktop computer or out with their mobile devices.</Text>
              </div>
              <div className="col col--1-1 col--1-2@md product-feature-image-container">
                <img className="product-feature-image" src={featureImage1} alt={'placeholder product feature'} />
              </div>
            </div>
            <br/>
            <Text size={'h1'} type={'header'} horizontalRule displayBlock>Featured cause</Text>
            <InfoBox
              title={'Change the way the U.S. handles sexual assault'}
              description={`In some states there are decades-long backlogs, with thousands of kits waiting to be tested. In other states, they're never tested and even destroyed after mere months.`}
              action={{ name: 'Take Action', url: '/causes/rise' }}
              image={'k8rugeo8v1x5ukef9prc'}
            />
          </div>
        </div>
        <div className="sign-up-prompt tinted-image-background">
          <div className="row row--padded">
            <div className="col col--1-1">
              <Text size={'xl'} displayBlock bottomMargin>Make change happen.</Text>
              <DemoRequest />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
