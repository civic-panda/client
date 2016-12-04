import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './fade-in.scss';

interface Props {
  show?: boolean;
  children?: any;
}

export const FadeIn = (props: Props) => (
  <ReactCSSTransitionGroup
    transitionName="fade-transition"
    transitionAppear
    transitionAppearTimeout={200}
    transitionEnterTimeout={0}
    transitionLeaveTimeout={0}
  >
    {(props.show === undefined || props.show) && props.children}
  </ReactCSSTransitionGroup>
);

export default FadeIn;
