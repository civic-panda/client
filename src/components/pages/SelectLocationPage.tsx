import * as React from 'react';
import { Link, browserHistory, locationShape } from 'react-router';

import AddressPicker from '../AddressPicker';
import { Button, CauseInfo, Text, InfoBox, Input } from '../ui';

interface Props {
  location: {
    query: {
      next: string;
    }
  };
};

export class SelectLocation extends React.Component<Props, {}> {
  public render() {
    return (
      <div className="select-location-page">
        <div className="row row--padded" style={{ marginTop: '54px' }}>
          <div className="col--1-1">
            <Text
              type={'header'}
              size={'h1'}
              text={'Please enter your address to continue.'}
              displayBlock
              bottomMargin
            />
            <AddressPicker onClick={() => browserHistory.push({ pathname: this.props.location.query.next })} />
          </div>
        </div>
      </div>
    );
  }
}

export default SelectLocation;
