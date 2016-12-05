import * as React from 'react';

import { Text } from '../ui';
import Autocomplete from './ForkedAutocomplete';

interface State {
  googlemaps: any;
}

interface Props {
  style?: any;
  label?: string;
  name?: string;
  error?: string;
  value?: string;
  autoFocus?: boolean;
  customInput?: any;
  onPlaceSelected(event: any): void;
  onChange(event: any): void;
  onFocus?(event: any): void;
  onBlur?(event: any): void;
}

interface Context {
  googlemaps: any;
  onGoogleMapsLoaded: (fn: (gm: any) => void) => void;
}

class AutocompleteInput extends React.Component<Props, State> {
  public static contextTypes = {
    googlemaps: React.PropTypes.object,
    onGoogleMapsLoaded: React.PropTypes.func,
  };

  public context: Context;

  public constructor(props: Props, context: Context) {
    super(props);
    this.state = {
      googlemaps: context.googlemaps,
    };
  }

  public componentDidMount() {
    this.context.onGoogleMapsLoaded((googlemaps: any) => {
      this.setState({ googlemaps });
    });
  }

  public render () {
    return this.state.googlemaps
      ? (
        <Autocomplete
          placeholder={'Your address'}
          onPlaceSelected={this.props.onPlaceSelected}
          types={['geocode']}
          componentRestrictions={{country: 'us'}}
          places={this.state.googlemaps.places}
          {...this.props}
        />
      ) : (
        <div className={'input'} style={{ textAlign: 'left', lineHeight: '38px' }}>
          <Text align={'left'} text={'Loading Google Maps'} />
        </div>
      );
  }
}

export default AutocompleteInput;
