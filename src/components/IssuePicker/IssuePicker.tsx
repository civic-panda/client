import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, issues } from '../../modules';
import { Button, Icon, Link, Text } from '../ui';
import './issue-picker.scss';

interface Props {};

interface StateProps {
  issues: issues.Issue[];
  subscribed: (number | string)[];
};

interface DispatchProps {
  subscribe: (issue: number | string) => void;
  unsubscribe: (issue: string | number) => void;
};

interface State {};

class IssuePicker extends React.Component<Props & StateProps & DispatchProps, State> {
  public render() {
    return (
      <div className="issue-picker row row--padded">
        {this.props.issues.map((issue, index) => {
          const isSubscribed = this.props.subscribed.indexOf(issue.id) > -1;
          const classes = classNames(
            'issue-block',
            `issue-block--${index % 5}th`,
            { 'issue-block--is-subscribed': isSubscribed },
          );

          return (
            <div
              key={issue.id}
              className="col--1-1 col--1-2@sm col--1-3@lg col--1-4@xl"
            >
              <div
                className={classes}
                onClick={() => isSubscribed ? this.props.unsubscribe(issue.id) : this.props.subscribe(issue.id)}
              >
                {isSubscribed && <Icon className={'check-mark'} type={'check'} encircle />}
                <Text
                  text={issue.name}
                  size={'h4'}
                  type={'header'}
                  color={isSubscribed ? 'inverse' : 'light'}
                  className={isSubscribed ? 'text-shadow' : ''}
                  weight={'bold'}
                  align={'center'}
                  displayBlock
                />
                <Link
                  link={`/issues/${issue.id}`}
                  type={'colorless'}
                  text={'Info'}
                  size={'small'}
                  preventDefault
                />
                <div
                  className="background-image"
                  style={{
                    backgroundImage: (issue.image && issue.image.secure_url)
                      ? `url(${issue.image.secure_url})`
                      : undefined,
                  }}
                >
                </div>
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
