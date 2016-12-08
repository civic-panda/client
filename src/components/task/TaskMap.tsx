import * as React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';

import { AppState, user } from '../../modules';
import { Button, Link, Text } from '../ui';

interface StateProps {
  location: user.Location;
}

interface Props {};

interface State {};

class TaskMap extends React.Component<Props & StateProps, State> {
  public render() {
    const center = [this.props.location.latitude, this.props.location.longitude];

    return (
      <div style={{ background: 'gray', minHeight: '380px', position: 'relative' }}>
        <Map
          center={center}
          zoom={13}
          style={{ height: '380px', position: 'relative', zIndex: 1 }}
        >
          <Marker position={center} />
          <TileLayer
            url={'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'}
          />
        </Map>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  location: user.selectors.getLocation(state),
});

export const TaskMapContainer = connect<StateProps, {}, Props>(mapStateToProps)(TaskMap);
export default TaskMapContainer;
