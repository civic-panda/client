import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import createStore from './createStore';
import { loadDummyData } from './mock-data/load-data';
import routes from './routes';

const store = createStore();
const RouterWithData = loadDummyData(Router);

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <RouterWithData history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

export default App;
