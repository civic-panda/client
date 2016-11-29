import * as React from 'react';

import Nav from '../Nav';

interface PageWrapperProps {};

interface PageWrapperState {};

export class PageWrapper extends React.Component<PageWrapperProps, PageWrapperState> {
  public render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default PageWrapper;
