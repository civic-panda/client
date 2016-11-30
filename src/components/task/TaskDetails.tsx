import * as React from 'react';

import { tasks } from '../../modules';
import { Text } from '../ui';
import './task-details.scss';

interface Props {
  task: tasks.Task;
  darkBackground?: boolean;
};

interface State {};

export class TaskDetails extends React.Component<Props, State> {
  public getDurationClass(time: string | number) {
      if (typeof time === 'string') {
        return 'duration--other';
      } else if (time <= 30) {
        return 'duration--short';
      } else if (time <= 60) {
        return '';
      } else {
        return 'duration--long';
      }
  }

  public render() {
    const task = this.props.task;

    return (
      <div className={`task-details`}>
        <div className={`duration ${this.getDurationClass(task.duration)}`}>
          <Text text={`${task.duration}`} color={'inverse'} align={'center'} />
        </div>
        <div className="distance">
          <Text text={'0 miles away'} align={'center'} color={this.props.darkBackground ? 'inverse' : 'primary'} />
        </div>
      </div>
    );
  }
}

export default TaskDetails;
