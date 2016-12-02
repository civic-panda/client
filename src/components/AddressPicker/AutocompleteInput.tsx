import * as React from 'react';

import Autocomplete from './ForkedAutocomplete';

const AutocompleteInput = (props: { onChange(results: any): void }) => (
  <Autocomplete
    placeholder={'Your address'}
    onPlaceSelected={props.onChange}
    types={['geocode']}
    componentRestrictions={{country: 'us'}}
  />
);

export default AutocompleteInput;
