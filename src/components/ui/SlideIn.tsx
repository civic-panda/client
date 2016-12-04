import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './slide-in.scss';

interface Props {
  show?: boolean;
  children?: any;
}

export const SlideIn = (props: Props) => (
  <ReactCSSTransitionGroup
    transitionName="slide-transition"
    transitionAppear
    transitionAppearTimeout={280}
    transitionEnterTimeout={0}
    transitionLeaveTimeout={0}
  >
    {(props.show === undefined || props.show) && props.children}
  </ReactCSSTransitionGroup>
);
