import * as React from 'react';

interface WrapperProps {};

interface WrapperState {};

class Wrapper extends React.Component<WrapperProps, WrapperState> {
  public render() {
    return (
      <div>
        <div>Nav</div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Wrapper;
