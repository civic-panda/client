/*
  Forked from https://github.com/ErrorPro/react-google-autocomplete and ported to typescript
*/
import * as React from 'react';

interface Props {
  placeholder?: string;
  style?: any;
  types?: any[];
  label?: string;
  name?: string;
  error?: string;
  value?: string;
  autoFocus?: boolean;
  customInput?: any;
  componentRestrictions?: any;
  onPlaceSelected(place: any): void;
  onChange(event: any): void;
  onFocus?(event: any): void;
  onBlur?(event: any): void;
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
    const { autoFocus, placeholder, name, label, value, error, onChange, onFocus, onBlur } = this.props;

    return (
      <input
        ref="input"
        className="input"
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    );
  }
}
