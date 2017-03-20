import * as React from 'react';
import { Link } from 'react-router';

import * as Cloudinary from '../ui/cloudinaryUrl';
import AddressPicker from '../AddressPicker';
import DemoRequest from '../DemoRequest';
import CausePicker from '../CausePicker';
import { Button, Text, InfoBox, Input } from '../ui';
import './splash-page.scss';
import './cause-page.scss';

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
            <div className={'cause-info-box col--1-1'}>
              <div className="col--1-1 col--2-3@md col--5-6@lg">
                <Link to={'/causes/rise'}>
                  <Text
                    text={'Rise'}
                    type={'header'}
                    size={'h2'}
                    displayBlock
                    bottomMargin
                  />
                </Link>
                <Text text={'Rise is a national civil rights nonprofit spearheading the effort to enshrine the rights of survivors of sexual assault in law. The Rise movement is currently active in 30 states and 3 countries, and the movement has thus far created 6 laws for 4 states and 1 country -- the United States of America.'} displayBlock />
              </div>
              <div className="col--1-1 col--1-3@md col--1-6@lg cause-logo">
                <img
                  src={Cloudinary.createUrl('vzpv7od179vowo5mptfc', { height: 180, width: 180, crop: 'fit' })}
                  alt={'Rise logo'}
                />
              </div>
            </div>
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
