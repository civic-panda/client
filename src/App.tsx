import * as React from 'react';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';

import loadGoogleMaps from './components/AddressPicker/loadGoogleMaps';
import createStore from './createStore';
import { loadDummyData } from './mock-data/load-data';
import routes from './routes';

const store = createStore();
const RouterWithData = loadGoogleMaps(loadDummyData(Router));

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <Provider store={store}>
        <RouterWithData history={hashHistory} routes={routes(store)} />
      </Provider>
    );
  }
}

export default App;
