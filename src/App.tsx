import * as React from 'react';
import { Router, browserHistory } from 'react-router';

import './App.css';
import routes from './routes';

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="App">
        <Router history={browserHistory} routes={routes} />
      </div>
    );
  }
}

export default App;
