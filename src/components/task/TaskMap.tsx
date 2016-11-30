import * as React from 'react';

import { Button, Link, Text } from '../ui';

interface TaskMapProps {};

interface TaskMapState {};

export class TaskMap extends React.Component<TaskMapProps, TaskMapState> {
  public render() {
    return (
      <div style={{ background: 'gray', height: '380px' }}>
        <Text text={'map placeholder'} />
      </div>
    );
  }
}

export default TaskMap;
