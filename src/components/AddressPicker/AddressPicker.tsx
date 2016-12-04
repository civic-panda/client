import * as classNames from 'classnames';
import * as React from 'react';
import { browserHistory } from 'react-router';

import { user } from '../../modules';
import lookupDistrict from '../../util/lookupDistrict';
import { Button, Input, Link, Text } from '../ui';
import './address-picker.scss';
import AutocompleteInput from './AutocompleteInput';

interface AddressPickerProps {
  style?: 'light' | 'dark';
  location: user.Location;
  setLocation(location: user.Location): void;
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

  public setAddress = (event: any) => {
    this.setState({ address: event.target.value, minutes: this.state.minutes });
  }

  public setMinutes = (event: any) => {
    this.setState({ address: this.state.address, minutes: event.target.value });
  }

  public lookupDistrict = async (place: any) => {
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const { district, state } = await lookupDistrict(lat, lng);

    this.props.setLocation({
      name: place.name,
      latitude: lat,
      longitude: lng,
      state,
      district,
    });
  }

  public isLocationSet = () =>
    !!this.props.location && !!this.props.location.state && !!this.props.location.district

  public goToTasks = () => {
    browserHistory.push('/tasks');
  }

  public render() {
    const classes = classNames('address-picker', {
      'address-picker--light': this.props.style === 'light',
    });

    return (
      <div className={classes}>
        <div className="row row--centered row--padded">
          <Input
            label={`I'm in`}
            type={'text'}
            placeholder={'Your address'}
            value={this.state.address}
            onChange={this.setAddress}
            customInput={<AutocompleteInput onChange={this.lookupDistrict} />}
          />
          <Input
            label={`and I have`}
            type={'text'}
            placeholder={'30 minutes'}
            value={this.state.minutes}
            onChange={this.setMinutes}
            size={'short'}
          />
          <Button disabled={this.isLocationSet()} text={'Find tasks'} onClick={this.goToTasks} />
        </div>
      </div>
    );
  }
}

export default AddressPicker;
