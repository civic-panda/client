import * as React from 'react';

interface PageWrapperProps {};

interface PageWrapperState {};

export class PageWrapper extends React.Component<PageWrapperProps, PageWrapperState> {
  public render() {
    return (
      <div>
        <div>Nav</div>
        {this.props.children}
      </div>
    );
  }
}

export default PageWrapper;
