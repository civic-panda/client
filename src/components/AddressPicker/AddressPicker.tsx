import * as React from 'react';

import { Button, Link, Text } from '../ui';

interface AddressPickerProps {};

interface AddressPickerState {};

export class AddressPicker extends React.Component<AddressPickerProps, AddressPickerState> {
  public render() {
    return (
      <Link text={'Button'} link={'tasks'} />
    );
  }
}

export default AddressPicker;
