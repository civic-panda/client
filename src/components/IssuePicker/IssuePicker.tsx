import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, issues } from '../../modules';
import { Button, Link, Text } from '../ui';
import './issue-picker.scss';

interface Props {};

interface StateProps {
  issues: issues.Issue[];
  subscribed: number[];
};

interface DispatchProps {
  subscribe: (issue: number) => void;
  unsubscribe: (issue: number) => void;
};

interface State {};

class IssuePicker extends React.Component<Props & StateProps & DispatchProps, State> {
  public render() {
    return (
      <div className="issue-picker row row--padded">
        <div className="row">
          <Text
            text={'The Issues'}
            size={'h1'}
            color={'accent'}
            align={'center'}
            displayBlock
          />
          <Text
            text={'click to unsubscribe'}
            size={'small'}
            color={'light'}
            align={'center'}
            displayBlock
            bottomMargin
          />
        </div>
        {this.props.issues.map(issue => {
          const isSubscribed = this.props.subscribed.indexOf(issue.id) > -1;
          const classes = classNames(
            'issue-block',
            { 'issue-block--is-subscribed': isSubscribed },
          );

          return (
            <div
              key={issue.id}
              className="col--1-1 col--1-2@md col--1-3@lg col--1-4@xl"
            >
              <div
                className={classes}
                onClick={() => isSubscribed ? this.props.unsubscribe(issue.id) : this.props.subscribe(issue.id)}
              >
                <Text
                  text={issue.name}
                  size={'h4'}
                  color={isSubscribed ? 'inverse' : 'light'}
                  weight={'bold'}
                  align={'center'}
                  displayBlock
                />
              </div>
            </div>
          );
        }
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  issues: issues.selectors.getList(state),
  subscribed: issues.selectors.getSubscribed(state),
});

const mapDispatchToProps = {
  subscribe: issues.actionCreators.subscribe,
  unsubscribe: issues.actionCreators.unsubscribe,
};

export default connect(mapStateToProps, mapDispatchToProps)(IssuePicker);
