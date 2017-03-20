import * as classNames from 'classnames';
import * as React from 'react';
import { browserHistory } from 'react-router';

import { congress, user } from '../../modules';
import { lookupDistrict } from '../../util/api';
import { Button, Input, Link, Select, Text } from '../ui';
import './address-picker.scss';
import AutocompleteInput from './AutocompleteInput';

interface AddressPickerProps {
  style?: 'light' | 'dark';
  location: user.Location;
  setLocation(location: user.Location): void;
  setCongress(congress: {
    callList: any[],
    senators: congress.CongressPerson[],
    representatives: congress.CongressPerson[],
  }): void;
  onClick?(): any;
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
    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const { callList, district, representatives, senators, state } = await lookupDistrict(lat, lng);

    this.props.setCongress({
      callList,
      senators,
      representatives,
    });

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

  public isLocationSet = () => !!this.props.location

  public goToTasks = () => {
    const location = browserHistory.getCurrentLocation();
    browserHistory.push(location.pathname === '/' ? '/tasks' : location.pathname + '/tasks');
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
        <div className="row">
          <span style={{ whiteSpace: 'nowrap' }}>
            <Input
              type={'text'}
              placeholder={'Your address'}
              value={this.state.address}
              onChange={this.setAddress}
              customInput={AutoComplete}
            />
            <Button
              disabled={!this.isLocationSet()}
              text={'Act On This'}
              disabledText={'Please select an address.'}
              onClick={() => this.props.onClick ? this.props.onClick() : this.goToTasks()}
            />
          </span>
          <br />
          <br />
          <Text className={'col--1-1 col--2-3@md col--1-2@lg'} type={'label'} size={'small'} displayBlock>
            Your location helps us to localize tasks that need immediate action in your area
          </Text>
        </div>
      </div>
    );
  }
}

export default AddressPicker;
