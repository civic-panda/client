import * as classNames from 'classnames';
import * as React from 'react';

import { Button, Input, Link, Text } from '../ui';
import './address-picker.scss';

interface AddressPickerProps {
  style?: 'light' | 'dark';
};

interface AddressPickerState {
  address: string;
  minutes: string;
};

export class AddressPicker extends React.Component<AddressPickerProps, AddressPickerState> {
  public constructor(props: AddressPickerProps) {
      super(props);

      this.state = {
          address: '',
          minutes: '',
      };
  }

  public setAddress(event: any) {
    this.setState({ address: event.target.value, minutes: this.state.minutes });
  }

  public setMinutes(event: any) {
    this.setState({ address: this.state.address, minutes: event.target.value });
  }

  public geocodeAddress(): void {
    const address = this.state.address;
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address }, (results: google.maps.GeocoderResult[], status: google.maps.GeocoderStatus) => {
      if (status === google.maps.GeocoderStatus.OK) {
        console.log(results[0].geometry.location.lat(), results[0].geometry.location.lng());
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  public render() {
    const classes = classNames('address-picker', {
      'address-picker--light': this.props.style === 'light',
    });

    return (
      <div className={classes}>
        <div className="row row--centered row--padded">
          <Text type={'label'} text={`I'm in `} />
          <Input type={'text'} placeholder={'Your address'} value={this.state.address} onChange={this.setAddress.bind(this)} />
          <Text type={'label'} text={` and I have `} />
          <Input type={'text'} placeholder={'30 minutes'} value={this.state.minutes} onChange={this.setMinutes.bind(this)} />
          <Link text={'Find tasks'} link={'tasks'} onClick={this.geocodeAddress.bind(this)} />
        </div>
      </div>
    );
  }
}

export default AddressPicker;
