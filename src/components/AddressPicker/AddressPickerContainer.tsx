import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, user } from '../../modules';
import AddressPicker from './AddressPicker';

interface StateProps {
  location: user.Location;
}

interface OwnProps {
  style?: 'light' | 'dark';
}

interface DispatchProps {
  setLocation(location: user.Location): void;
}

const mapStateToProps = (state: AppState) => ({
  location: user.selectors.getLocation(state),
});

const mapDispatchToProps = {
  setLocation: user.actionCreators.setLocation,
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(AddressPicker);
