import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './fade-in.scss';

export const FadeIn = (props: any) => (
  <ReactCSSTransitionGroup
    transitionName="fade-transition"
    transitionAppear
    transitionAppearTimeout={280}
    transitionEnterTimeout={0}
    transitionLeaveTimeout={0}
  >
    {props.children}
  </ReactCSSTransitionGroup>
);
