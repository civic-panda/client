import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Nav from '../Nav';
import './page-wrapper.scss';

interface Props {
  routes: { name: string }[];
  children: React.ReactElement<any>;
  location: { pathname: string };
};

interface State {};

export class PageWrapper extends React.Component<Props, State> {
  public render() {
    const currentRoute = this.props.routes[this.props.routes.length - 1];
    return (
      <div className="page-container">
        <Nav currentRoute={currentRoute.name} />
        <ReactCSSTransitionGroup
          transitionName="page-transition"
          transitionAppear
          transitionAppearTimeout={500}
          transitionEnterTimeout={120}
          transitionLeaveTimeout={120}
        >
          <div key={this.props.location.pathname} className="page-content">
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
