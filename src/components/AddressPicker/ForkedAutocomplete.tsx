/*
  Forked from https://github.com/ErrorPro/react-google-autocomplete and ported to typescript
*/
import * as React from 'react';

interface Props {
  placeholder?: string;
  style?: any;
  types?: any[];
  componentRestrictions?: any;
  onPlaceSelected(place: any): void;
}

export default class ReactGoogleAutocomplete extends React.Component<Props, {}> {
  public refs: any = {};
  private autocomplete: any;

  constructor(props: Props) {
    super(props);
    this.autocomplete = null;
  }

  public componentDidMount() {
    const { types = ['(cities)'], componentRestrictions = {} } = this.props;

    this.autocomplete = new google.maps.places.Autocomplete(this.refs.input, {
      types,
      componentRestrictions,
    });

    this.autocomplete.addListener('place_changed', this.onSelected.bind(this));
  }

  public onSelected = () => {
    if (this.props.onPlaceSelected) {
      this.props.onPlaceSelected(this.autocomplete.getPlace());
    }
  }

  public render() {
    const { onPlaceSelected, types, componentRestrictions } = this.props;

    return (
      <input
        ref="input"
        className="input"
        placeholder={this.props.placeholder}
      />
    );
  }
}
