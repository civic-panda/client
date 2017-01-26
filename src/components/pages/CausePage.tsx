import * as React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';

import { AppState, issues, tasks } from '../../modules';
import AddressPicker from '../AddressPicker';
import { TaskSummary } from '../task';
import Embed from '../Embed/Embed';
import { SquareImage, Text, Button } from '../ui';
import './cause-page.scss';

export interface Props {
  params: {
    causeName: string;
  };
};

export interface StateProps {
  isLoaded: boolean;
  cause: issues.Issue;
  tasks: tasks.Task[];
};

interface State {};

export default class CausePage extends React.Component<Props & StateProps, State> {
  public render() {
    const location = browserHistory.getCurrentLocation();
    if (!this.props.isLoaded) {
      return <div>Loading {this.props.params.causeName}...</div>
    }
    return (
      <div className={'cause-page'}>
        <div className={'cause__header'}>
          <div className="row row--padded">
            <div className="col--1-1 col--3-5@md col--2-3@lg">
              <Text text={this.props.cause.callToAction} type={'header'} size={'xl'} displayBlock bottomMargin />
              {this.props.cause.blurb &&
                <Text text={this.props.cause.blurb} size={'p'} displayBlock bottomMargin />
              }
              <AddressPicker />
            </div>
            <div className="cause__splash-image col--1-1 col--2-5@md col--1-3@lg" style={{ textAlign: 'right' }}>
              <SquareImage url={this.props.cause.image.secure_url} />
            </div>
          </div>
        </div>
        <div className={'cause row row--padded'}>
          {this.props.cause.summary && (
            <div className={'cause__body col--1-1 col--2-3@lg'}>
              <Text
                size={'h1'}
                type={'header'}
                text={`About`}
                displayBlock
                bottomMargin
              />
              <p dangerouslySetInnerHTML={{ __html: this.props.cause.summary }} />
              <br />
              <Text
                size={'h1'}
                type={'header'}
                text={`Additional Reading`}
                displayBlock
                bottomMargin
              />
              <div className="external-links"><p dangerouslySetInnerHTML={{ __html: this.props.cause.reading }} /></div>
            </div>
          )}
          {this.props.cause.reading && (
            <div className={'issue__notes col--1-1 col--1-3@lg'}>
              <Text
                size={'h2'}
                type={'label'}
                color={'site-black'}
                text={`Key Facts`}
                displayBlock
                bottomMargin
              />
              <div className="external-links"><p dangerouslySetInnerHTML={{ __html: this.props.cause.facts }} /></div>
              <Embed
                title={this.props.cause.name}
                logo={this.props.cause.logo.secure_url}
                image={this.props.cause.image.secure_url}
                link={`https://debug-politics.actonthis.org${location.pathname}`}
                callToAction={this.props.cause.callToAction}
              />
            </div>
          )}
          <div className="col--1-1">
            <Text
              size={'h1'}
              type={'header'}
              text={`Recent Tasks`}
              displayBlock
              bottomMargin
            />
            {
              this.props.tasks.map(task => (
                <TaskSummary key={task.id} task={task} cause={this.props.cause} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}
