import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, congress, user } from '../../modules';
import AddressPicker from './AddressPicker';

interface StateProps {
  location: user.Location;
}

interface OwnProps {
  style?: 'light' | 'dark';
}

interface DispatchProps {
  setLocation(location: user.Location): void;
  setCongress(congress: congress.State): void;
}

const mapStateToProps = (state: AppState) => ({
  location: user.selectors.getLocation(state),
});

const mapDispatchToProps = {
  setLocation: user.actionCreators.setLocation,
  setCongress: congress.actionCreators.setCongress,
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(AddressPicker);
