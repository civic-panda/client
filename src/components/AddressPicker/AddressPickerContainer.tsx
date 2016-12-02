import * as React from 'react';
import { connect } from 'react-redux';

import { user } from '../../modules';
import AddressPicker from './AddressPicker';

interface OwnProps {
  style?: 'light' | 'dark';
}

interface DispatchProps {
  setLocation(location: user.Location): void;
}

const mapDispatchToProps = {
  setLocation: user.actionCreators.setLocation,
};

export default connect<{}, DispatchProps, OwnProps>(undefined, mapDispatchToProps)(AddressPicker);
