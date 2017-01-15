import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { AppState, issues, tasks } from '../../modules';
import AddressPicker from '../AddressPicker';
import { TaskSummary } from '../task';
import { SquareImage, Text, Button } from '../ui';
import './cause-page.scss';

interface Props {
  params: {
    causeName: string;
  };
};

interface StateProps {
  cause: issues.Issue;
  tasks: tasks.Task[];
};

interface State {};

class CausePage extends React.Component<Props & StateProps, State> {
  public render() {
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
            <div className="col--1-1 col--2-5@md col--1-3@lg" style={{ textAlign: 'right' }}>
              <SquareImage className={'elevation--4'} url={this.props.cause.image.secure_url} />
            </div>
          </div>
        </div>
        <div className={'cause row row--padded'}>
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
          <div className={'issue__notes col--1-1 col--1-3@lg'}>
            <Text

              size={'h2'}
              type={'label'}
              color={'site-black'}
              text={`Key Facts`}
              displayBlock
              bottomMargin
            />
            <div><p dangerouslySetInnerHTML={{ __html: this.props.cause.facts }} /></div>
            <Button
            
            text={'</>Embed'}
            disabledText={'Please select an address.'}
            
            />
          </div>
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

const mapStateToProps = (state: AppState, ownProps: Props) => {
  const currentCause = issues.selectors.getIssueByParam(state, { param: ownProps.params.causeName });

  return {
    cause: currentCause,
    tasks: tasks.selectors.getList(state).filter(task => task.issue === currentCause.id),
  };
};

const ConnectedPage = connect<StateProps, {}, Props>(mapStateToProps)(CausePage);

export {
  ConnectedPage as CausePage,
}
