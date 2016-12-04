import * as React from 'react';

import Autocomplete from './ForkedAutocomplete';

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

const AutocompleteInput = (props: Props) => (
  <Autocomplete
    placeholder={'Your address'}
    onPlaceSelected={props.onPlaceSelected}
    types={['geocode']}
    componentRestrictions={{country: 'us'}}
    {...props}
  />
);

export default AutocompleteInput;
