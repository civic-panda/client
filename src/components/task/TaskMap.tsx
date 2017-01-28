import * as React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { connect } from 'react-redux';

import { AppState, tasks, user } from '../../modules';
import { Button, Link, Text } from '../ui';

interface StateProps {
  location: user.Location;
  tasks: tasks.Task[];
}


interface OwnProps {
  causeId?: string;
}

interface State {};

class TaskMap extends React.Component<OwnProps & StateProps, State> {
  public render() {
    const center = [this.props.location.latitude, this.props.location.longitude];

    return (
      <div style={{ background: 'gray', minHeight: '380px', position: 'relative' }}>
        <Map
          center={center}
          zoom={11}
          style={{ height: '380px', position: 'relative', zIndex: 0 }}
        >
          {
            this.props.tasks.map(task => {
              const location = task.location.latitude
                ? [task.location.latitude, task.location.longitude]
                : center;
              return (<Marker key={task.id} position={location} />);
            })
          }
          <TileLayer
            url={'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'}
          />
        </Map>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  location: user.selectors.getLocation(state),
  tasks: ownProps.causeId
    ? tasks.selectors.getRemaining(state).filter(task => task.cause === ownProps.causeId)
    : tasks.selectors.getRemaining(state),
});

export const TaskMapContainer = connect<StateProps, {}, OwnProps>(mapStateToProps)(TaskMap);
export default TaskMapContainer;
