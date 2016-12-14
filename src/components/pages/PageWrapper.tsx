import * as mixpanel from 'mixpanel-browser';
import * as React from 'react';
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Footer from '../Footer';
import Nav from '../Nav';
import './page-wrapper.scss';

interface Props {
  routes: { name: string }[];
  children: React.ReactElement<any>;
  location: { pathname: string };
  params: { [key: string]: any };
};

interface State {};

export class PageWrapper extends React.Component<Props, State> {
  public componentDidMount() {
    this.trackPageLoad(this.props);
  }

  public componentWillReceiveProps(nextProps: Props) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.trackPageLoad(nextProps);
    }
  }

  public trackPageLoad (props: Props) {
    const nextRoute = props.routes[props.routes.length - 1];
    const mixpanelProps = { page: nextRoute.name || 'splash', ...props.params };
    mixpanel.track('loaded page', mixpanelProps);
  }

  public render() {
    const currentRoute = this.props.routes[this.props.routes.length - 1];
    return (
      <div className="page-container">
        <Nav currentRoute={currentRoute.name} />
        <ReactCSSTransitionGroup
          transitionName="page-transition"
          transitionEnterTimeout={180}
          transitionLeaveTimeout={180}
        >
          <div key={this.props.location.pathname} className="page-content">
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
        <Footer />
      </div>
    );
  }
}
