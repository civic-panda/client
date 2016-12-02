import * as classNames from 'classnames';
import * as React from 'react';

import { Button, Input, Link, Text } from '../ui';
import './address-picker.scss';

interface AddressPickerProps {
  style?: 'light' | 'dark';
};

interface AddressPickerState {};

export class AddressPicker extends React.Component<AddressPickerProps, AddressPickerState> {
  public render() {
    const classes = classNames('address-picker', {
      'address-picker--light': this.props.style === 'light',
    });

    return (
      <div className={classes}>
        <div className="row row--centered row--padded">
          <Text type={'label'} text={`I'm in `} />
          <Input type={'text'} onChange={() => null} placeholder={'Your address'} />
          <Text type={'label'} text={` and I have `} />
          <Input type={'text'} onChange={() => null} placeholder={'30 minutes'} size={'short'} />
          <Link text={'Find tasks'} link={'tasks'} />
        </div>
      </div>
    );
  }
}

export default AddressPicker;
