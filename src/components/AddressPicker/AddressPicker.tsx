import * as React from 'react';

import { Button, Link, Text } from '../ui';
import './address-picker.scss';

interface AddressPickerProps {};

interface AddressPickerState {};

export class AddressPicker extends React.Component<AddressPickerProps, AddressPickerState> {
  public render() {
    return (
      <div className="address-picker">
        <div className="row row--centered row--padded">
          <Link text={'Find tasks'} link={'tasks'} />
        </div>
      </div>
    );
  }
}

export default AddressPicker;
