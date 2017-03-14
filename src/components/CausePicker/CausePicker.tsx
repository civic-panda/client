import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, causes } from '../../modules';
import { createUrl, Button, Icon, Link, Text } from '../ui';
import './cause-picker.scss';

interface Props {};

interface StateProps {
  causes: causes.Cause[];
  subscribed: string[];
};

interface DispatchProps {
  subscribe: (cause: string) => void;
  unsubscribe: (cause: string) => void;
};

interface State {};

class CausePicker extends React.Component<Props & StateProps & DispatchProps, State> {
  public render() {
    return (
      <div className="cause-picker row row--padded">
        {this.props.causes.map((cause, index) => {
          const isSubscribed = this.props.subscribed.indexOf(cause.id) > -1;
          const classes = classNames(
            'cause-block',
            `cause-block--${index % 5}th`,
            { 'cause-block--is-subscribed': isSubscribed },
          );

          return (
            <div
              key={cause.id}
              className="col--1-1 col--1-2@sm col--1-3@lg col--1-4@xl"
            >
              <div
                className={classes}
                onClick={() => isSubscribed ? this.props.unsubscribe(cause.id) : this.props.subscribe(cause.id)}
              >
                {isSubscribed && <Icon className={'check-mark'} type={'check'} encircle />}
                <Text
                  text={cause.name}
                  size={'h4'}
                  type={'header'}
                  color={isSubscribed ? 'inverse' : 'light'}
                  className={isSubscribed ? 'text-shadow' : ''}
                  weight={'bold'}
                  align={'center'}
                  displayBlock
                />
                <Link
                  link={`/causes/${cause.name.split(' ').join('-')}`}
                  type={'colorless'}
                  text={'View More'}
                  size={'small'}
                  preventDefault
                />
                <div
                  className="background-image"
                  style={{
                    backgroundImage: (cause.heroImage && cause.heroImage)
                      ? `url(${createUrl(cause.heroImage)})`
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
  causes: causes.selectors.getList(state),
  subscribed: causes.selectors.getSubscribed(state),
});

const mapDispatchToProps = {
  subscribe: causes.actionCreators.subscribe,
  unsubscribe: causes.actionCreators.unsubscribe,
};

export default connect(mapStateToProps, mapDispatchToProps)(CausePicker);
