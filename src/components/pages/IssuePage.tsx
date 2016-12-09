import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { AppState, issues } from '../../modules';
import { Text } from '../ui';
import './issue-page.scss';

interface Props {
  params: {
    issueId: string;
  };
};

interface StateProps {
  issue: issues.Issue;
}

interface State {};

class IssuePage extends React.Component<Props & StateProps, State> {
  public render() {
    return (
      <div className={'issue-page'}>
        <div className={'issue__header'}>
          <div className="row row--padded" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="col--1-1 col--2-3@lg">
              <Text text={this.props.issue.name} color={'inverse'} size={'lg'} displayBlock />
            </div>
          </div>
        </div>
        <div className={'issue row row--padded'}>
          <div className={'issue__body col--1-1 col--2-3@lg'}>
            <Text
              size={'h4'}
              type={'header'}
              color={'accent'}
              text={`The Issue`}
              displayBlock
              bottomMargin
            />
            <p dangerouslySetInnerHTML={{ __html: this.props.issue.summary }} />
            <br />
            <Text
              size={'h4'}
              type={'header'}
              color={'accent'}
              text={`Key Facts`}
              displayBlock
              bottomMargin
            />
            <div><p dangerouslySetInnerHTML={{ __html: this.props.issue.facts }} /></div>
          </div>
          <div className={'issue__notes col--1-1 col--1-3@lg'}>
            <Text
              size={'h4'}
              type={'header'}
              color={'accent'}
              text={`Additional Reading`}
              displayBlock
              bottomMargin
            />
            <div className="external-links"><p dangerouslySetInnerHTML={{ __html: this.props.issue.reading }} /></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: Props) => {
  const currentIssue = issues.selectors.getIssue(state, { issueId: ownProps.params.issueId });

  return {
    issue: currentIssue,
  };
};

const ConnectedPage = connect<StateProps, {}, Props>(mapStateToProps)(IssuePage);

export {
  ConnectedPage as IssuePage,
}
