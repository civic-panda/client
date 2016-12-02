import * as React from 'react';

import Autocomplete from './ForkedAutocomplete';

const AutocompleteInput = () => (
  <Autocomplete
    placeholder={'Your address'}
    onPlaceSelected={(place: any) => {
      console.log(place);
    }}
    types={['geocode']}
    componentRestrictions={{country: 'us'}}
  />
);

export default AutocompleteInput;
