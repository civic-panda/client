import loadGoogleMapsAPI from 'load-google-maps-api';
import * as React from 'react';

interface State {
  googlemaps: any;
}

interface Props {
  history?: any;
  routes?: any;
}

const loadGoogle = (WrappedComponent: React.ComponentClass<Props>) => {
  return class LoadGoogleMaps extends React.Component<Props, State> {
    public static childContextTypes = {
      googlemaps: React.PropTypes.object,
      onGoogleMapsLoaded: React.PropTypes.func,
    };

    public subscriptions: any[] = [];

    public constructor (props: Props) {
      super(props);
      this.state = { googlemaps: undefined };
    }

    public componentDidMount() {
      this.loadGoogleMaps();
    }

    public getChildContext() {
      return {
        googlemaps: this.state.googlemaps,
        onGoogleMapsLoaded: (fn: (gm: any) => void) => {
          this.state.googlemaps ? fn(this.state.googlemaps) : this.subscriptions.push(fn);
        },
      };
    }

    public loadGoogleMaps = async () => {
      const googlemaps = await loadGoogleMapsAPI({
        key: 'AIzaSyAZXY77aglmg1UXo7yHJs6xsRVaO9dvQnY',
        libraries: ['places'],
      });
      this.setState({ googlemaps });
      this.subscriptions.forEach(f => f(googlemaps));
    }

    public render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default loadGoogle;
