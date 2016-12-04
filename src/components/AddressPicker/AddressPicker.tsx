import * as classNames from 'classnames';
import * as React from 'react';
import { hashHistory } from 'react-router';

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
          address: props.location ? props.location.address : '',
          minutes: '',
      };
  }

  public componentWillReceiveProps(nextProps: AddressPickerProps) {
    if (nextProps.location && nextProps.location.address !== this.state.address) {
      const newState = { ...this.state, address: nextProps.location.address };
      this.setState(newState);
    }
  }

  public setAddress = (event: any) => {
    const newState = { ...this.state, address: event.target.value };
    this.setState(newState);
  }

  public setMinutes = (event: any) => {
    const newState = { ...this.state, minutes: event.target.value };
    this.setState(newState);
  }

  public lookupDistrict = async (place: any) => {
    console.log('lookupDistrict', place)
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const { district, state } = await lookupDistrict(lat, lng);

    this.props.setLocation({
      name: place.name,
      address: place.formatted_address,
      latitude: lat,
      longitude: lng,
      state,
      district,
    });
  }

  public clearIfNotSet = () => {
    if (!this.isLocationSet()) {
      const newState = { ...this.state, address: '' };
      this.setState(newState);
    }

    if (this.props.location && this.props.location.address !== this.state.address) {
      const newState = { ...this.state, address: this.props.location.address };
      this.setState(newState);
    }
  }

  public isLocationSet = () =>
    !!this.props.location && !!this.props.location.state && !!this.props.location.district

  public goToTasks = () => {
    hashHistory.push('/tasks');
  }

  public render() {
    const classes = classNames('address-picker', {
      'address-picker--light': this.props.style === 'light',
    });

    const AutoComplete = (
      <AutocompleteInput
        value={this.state.address}
        onChange={this.setAddress}
        onBlur={this.clearIfNotSet}
        onPlaceSelected={this.lookupDistrict}
      />
    );

    return (
      <div className={classes}>
        <div className="row row--centered row--padded">
          <Input
            label={`I'm at`}
            type={'text'}
            placeholder={'Your address'}
            value={this.state.address}
            onChange={this.setAddress}
            customInput={AutoComplete}
          />
          <Input
            label={`and I have`}
            type={'text'}
            placeholder={'30 minutes'}
            value={this.state.minutes}
            onChange={this.setMinutes}
            size={'short'}
          />
          <Button
            disabled={!this.isLocationSet()}
            text={'Find tasks'}
            disabledText={'Please select an address.'}
            onClick={this.goToTasks}
          />
        </div>
      </div>
    );
  }
}

export default AddressPicker;
