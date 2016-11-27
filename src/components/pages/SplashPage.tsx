import * as React from 'react';

interface SplashPageProps {};

interface SplashPageState {};

class SplashPage extends React.Component<SplashPageProps, SplashPageState> {
  public render() {
    return (
      <div>
        <div>Your Political Action Cheat Sheet</div>
        <div>Address Picker</div>
      </div>
    );
  }
}

export default SplashPage;
