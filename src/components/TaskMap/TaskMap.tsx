import * as React from 'react';

import { Button, Link, Text } from '../ui';

interface TaskMapProps {};

interface TaskMapState {};

export class TaskMap extends React.Component<TaskMapProps, TaskMapState> {
  public render() {
    return (
      <Text text={'map placeholder'} />
    );
  }
}

export default TaskMap;
