import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import './App.css';
import createStore from './createStore';
import routes from './routes';

const store = createStore();

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

export default App;
