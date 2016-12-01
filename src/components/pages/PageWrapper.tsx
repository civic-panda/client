import * as React from 'react';

import Nav from '../Nav';
import './page-wrapper.scss';

interface Props {
  routes: { name: string }[];
};

interface State {};

export class PageWrapper extends React.Component<Props, State> {
  public render() {
    const currentRoute = this.props.routes[this.props.routes.length - 1];
    return (
      <div className="page-container">
        <Nav currentRoute={currentRoute.name} />
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PageWrapper;
