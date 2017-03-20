import * as React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import * as Cloudinary from '../ui/cloudinaryUrl';
import { AppState, causes, tasks } from '../../modules';
import AddressPicker from '../AddressPicker';
import { TaskSummary } from '../task';
import Embed from '../Embed/Embed';
import { SquareImage, Text, Button, InfoBox } from '../ui';
import './cause-page.scss';

export interface Props {
  params: {
    causeName: string;
  };
};

export interface StateProps {
  isLoaded: boolean;
  cause: causes.Cause;
  parentCause: causes.Cause;
  childCauses: causes.Cause[];
  tasks: tasks.Task[];
};

interface State {};

export default class CausePage extends React.Component<Props & StateProps, State> {
  public render() {
    console.log('CausePage', this.props)
    const location = browserHistory.getCurrentLocation();
    if (!this.props.isLoaded) {
      return <div>Loading {this.props.params.causeName}...</div>
    }
    return (
      <div className={'cause-page'}>
        <div className={'cause__header'}>
          <div className="row row--padded">
            <div className="col--1-1 col--3-5@md col--2-3@lg">
              <Text
                text={this.props.cause.callToAction}
                type={'header'}
                size={'xl'}
                displayBlock
                bottomMargin
              />
              {this.props.cause.blurb &&
                <Text text={this.props.cause.blurb} size={'p'} displayBlock bottomMargin />
              }
              <AddressPicker />
            </div>
            <div className="cause__splash-image col--1-1 col--2-5@md col--1-3@lg" style={{ textAlign: 'right' }}>
              <SquareImage url={this.props.cause.heroImage} />
            </div>
          </div>
        </div>
        <div className={'cause row row--padded'}>
          <div className="col--1-1 col--2-3@lg">
            {this.props.cause.summary && (
              <div className={'cause__body'}>
                <Text
                  size={'h1'}
                  type={'header'}
                  text={`Who we are`}
                  displayBlock
                  bottomMargin
                />
                <p dangerouslySetInnerHTML={{ __html: this.props.cause.summary }} />
              </div>
            )}
            {this.props.cause.facts && (
              <div className={'cause__body'}>
                <Text
                  size={'h1'}
                  type={'header'}
                  text={`Key facts`}
                  displayBlock
                  bottomMargin
                />
                <p dangerouslySetInnerHTML={{ __html: this.props.cause.facts }} />
              </div>
            )}
            {this.props.cause.reading && (
              <div className={'cause__body'}>
                <Text
                  size={'h1'}
                  type={'header'}
                  text={`Further reading`}
                  displayBlock
                  bottomMargin
                />
                <div className="external-links">
                  <p dangerouslySetInnerHTML={{ __html: this.props.cause.reading }} />
                </div>
              </div>
            )}
          </div>
          {this.props.parentCause && (
            <div className="col--1-1">
              <Text
                size={'h1'}
                type={'header'}
                text={`Our parent group`}
                displayBlock
                bottomMargin
              />
              <div key={this.props.parentCause.id} className={'cause-info-box col--1-1'}>
                <div className="col--1-1 col--2-3@md col--5-6@lg">
                  <Link to={`/causes/${this.props.parentCause.name}`}>
                    <Text
                      text={this.props.parentCause.name}
                      type={'header'}
                      size={'h2'}
                      displayBlock
                      bottomMargin
                    />
                  </Link>
                  <Text text={this.props.parentCause.blurb} displayBlock />
                </div>
                <div className="col--1-1 col--1-3@md col--1-6@lg cause-logo">
                  <img
                    src={Cloudinary.createUrl(this.props.parentCause.logoImage, { height: 180, width: 180, crop: 'fit' })}
                    alt={this.props.parentCause.name}
                  />
                </div>
              </div>
            </div>
          )}
          {this.props.childCauses.length > 0 && (
            <div className="col--1-1">
              <Text
                size={'h1'}
                type={'header'}
                text={`Our groups`}
                displayBlock
                bottomMargin
              />
              {
                this.props.childCauses.sort((a, b) => (a.name.localeCompare(b.name))).map(cause => (
                  <div key={cause.id} className={'cause-info-box col--1-1'}>
                    <div className="col--1-1 col--2-3@md col--5-6@lg">
                      <Link to={`/causes/${cause.name}`}>
                        <Text
                          text={cause.name}
                          type={'header'}
                          size={'h2'}
                          displayBlock
                          bottomMargin
                        />
                      </Link>
                      <Text text={cause.blurb} displayBlock />
                    </div>
                    <div className="col--1-1 col--1-3@md col--1-6@lg cause-logo">
                      <img
                        src={Cloudinary.createUrl(cause.logoImage, { height: 180, width: 180, crop: 'fit' })}
                        alt={cause.name}
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          )}
        </div>
      </div>
    );
  }
}
