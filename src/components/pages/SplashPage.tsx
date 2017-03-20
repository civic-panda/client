import * as React from 'react';
import { Link } from 'react-router';

import * as Cloudinary from '../ui/cloudinaryUrl';
import AddressPicker from '../AddressPicker';
import DemoRequest from '../DemoRequest';
import CausePicker from '../CausePicker';
import { Button, CauseInfo, Text, InfoBox, Input } from '../ui';
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
            <CauseInfo
              cause={{
                "id": "d203396d-af7b-40cc-a44d-d51b8a5c334a",
                "name": "Rise",
                "callToAction": "Join the fight to secure basic civil rights for survivors in your state!",
                "blurb": "Rise is a national civil rights nonprofit spearheading the effort to enshrine the rights of survivors of sexual assault in law. The Rise movement is currently active in 30 states and 3 countries, and the movement has thus far created 6 laws for 4 states and 1 country -- the United States of America.",
                "brandColor": "#da6a50",
                "logoImage": "vzpv7od179vowo5mptfc",
                "heroImage": "kqq08vs1xf1dn8zyhops",
                "placeholderImage": "de3ebakzch73xcogl3br",
                "summary": "<p dir=\"ltr\">With 25 million rape survivors living in the United States alone, sexual assault is a problem that cannot be ignored. America leads the world in protecting citizens&rsquo; rights to liberty, yet we lack baseline protections for rape survivors.</p>\n<p dir=\"ltr\">In states across the nation, rape kits may be destroyed well before the statute of limitations -- in some states, in as little as 30 days.</p>\n<p dir=\"ltr\">In states across the nation, survivors are asked to navigate complex bureaucratic and legal webs without a qualified advocate or counselor -- while they are at their most vulnerable.</p>\n<p dir=\"ltr\">In states across the nation, survivors are denied access to the medical and police reports associated with their rape or sexual assault.</p>\n<p dir=\"ltr\"><span style=\"text-decoration: underline;\"><a href=\"http://www.risenow.us\" target=\"_blank\" rel=\"noopener noreferrer\">Rise</a></span>&nbsp;is changing that.</p>\n<p dir=\"ltr\">Last year, Rise advocated for <span style=\"text-decoration: underline;\"><a href=\"https://www.congress.gov/bill/114th-congress/house-bill/5578/text\" target=\"_blank\" rel=\"noopener noreferrer\">H.R. 5578</a></span> -- the Survivors&rsquo; Bill of Rights Act of 2016. The bill passed unanimously in the U.S. Congress&nbsp;and was signed by President Obama on October 7, 2016. This historic, bipartisan legislation is serving as a blueprint for states across the nation to support survivors of sexual assault by codifying their basic rights -- like the right to not have their rape kit destroyed before the end of the statute of limitations.</p>\n<p dir=\"ltr\"><span id=\"docs-internal-guid-3cf4c4b2-4767-ead6-0c72-cfd72d719b29\">Today, Rise is working to ensure that these same rights are also enshrined in state law in each of the 50 states. The majority of rapes and sexual assaults are handled at the state level, so these reforms are critical to ensuring that survivors are guaranteed their basic rights. </span></p>",
                "facts": "<p dir=\"ltr\"><span style=\"text-decoration: underline;\"><strong>Rise&rsquo;s Five Key Civil Rights:</strong></span></p>\n<p dir=\"ltr\">1. The right to not have your rape kit destroyed before either 20 years or the statute of limitations has passed (whichever is longer).</p>\n<p dir=\"ltr\">2. The right to be notified of your civil rights related to a sexual assault.</p>\n<p dir=\"ltr\">3. The right to not be charged for your own rape kit examination.</p>\n<p dir=\"ltr\">4. The right to access your own medical record related to a rape kit examination.</p>\n<p dir=\"ltr\" style=\"line-height: 1.2; margin-top: 0pt;\">5. The right to a copy of your own police report.</p>",
                "reading": "<p dir=\"ltr\">America leads the world in protecting citizens' rights to liberty and equality, yet our country currently lacks baseline procedures for rape survivors depriving millions of Americans basic liberties. The Center for Disease Control reports that a staggering 25 million Americans are rape survivors -- a population nearly equal to the state of Texas. Americans urgently need a comprehensive Sexual Assault Survivors' Bill of Rights that standardizes the best practices drawing on innovation we've seen implemented across the country.</p>\n<p dir=\"ltr\">Rise has assembled&nbsp;a non-partisan set of civil rights that have a low fiscal note and can pass in both Republican and Democratic legislatures. Our strength as a movement is our narrow focus on a set of five baseline rights that can pass any legislature -- yet are vital to protecting survivors.</p>\n<p dir=\"ltr\">Movement Snapshot: the movement is currently active in 30 states and 3 countries (United States, Japan, and Canada). In the United States, 19 states have organizers -- Risers -- on the ground. Since 2017, 13 states have introduced bills, 5 bills have passed Judiciary (MD, OK, VA, AZ, VT), 3 bills have passed floor votes (MD, VA, AZ), and 1 bill is on it's way to the Virginia Governor&rsquo;s desk.<strong> In total, the Rise movement has created 6 laws for 4 states and 1 country -- the United States of America.</strong></p>",
                "parent": null,
                "published": false,
              }}
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
