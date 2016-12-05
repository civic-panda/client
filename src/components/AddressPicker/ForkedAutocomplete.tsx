/*
  Forked from https://github.com/ErrorPro/react-google-autocomplete and ported to typescript
*/

import * as React from 'react';

import { Spinner } from '../ui';

interface State {
  loading: boolean;
}

interface Props {
  places?: any;
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

export default class ReactGoogleAutocomplete extends React.Component<Props, State> {
  public refs: any = {};
  private autocomplete: any;

  constructor(props: Props) {
    super(props);
    this.autocomplete = null;
    this.state = {
      loading: false,
    };
  }

  public componentDidMount() {
    const { types = ['(cities)'], componentRestrictions = {} } = this.props;

    this.autocomplete = new this.props.places.Autocomplete(this.refs.input, {
      types,
      componentRestrictions,
    });

    this.autocomplete.addListener('place_changed', this.onSelected.bind(this));
  }

  public onSelected = async () => {
    this.setState({ loading: true });
    await this.props.onPlaceSelected(this.autocomplete.getPlace());
    this.setState({ loading: false });
  }

  public render() {
    const { onPlaceSelected, types, componentRestrictions } = this.props;
    const { autoFocus, placeholder, name, label, value, error, onChange, onFocus, onBlur } = this.props;

    return (
      <span style={{ position: 'relative' }} className={`${this.state.loading && 'input--is-loading'}`}>
        <input
          ref="input"
          className={`input`}
          id={name}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          value={this.state.loading ? 'Loading your district' : value}
          autoFocus={autoFocus}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <Spinner color={'gray'} />
      </span>
    );
  }
}
