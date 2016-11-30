import * as React from 'react';
import { Link } from 'react-router';

import { tasks } from '../../modules';
import { Text } from '../ui';
import './task-list.scss';
import TaskDetails from './TaskDetails';

interface TaksListProps {
  tasks: tasks.Task[];
};

interface TaksListState {};

export class TaksList extends React.Component<TaksListProps, TaksListState> {
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
    return (
      <div className={'task-list'}>
        {
          this.props.tasks.map(task => (
            <Link key={task.id} to={`/tasks/${task.id}`}>
              <div className="task">
                <div className="task__description">
                  <Text
                    text={task.issue.name}
                    size={'small'}
                    color={'light'}
                    bottomMargin
                  />
                  <Text text={task.name} size={'h2'} bottomMargin />
                  <Text className="u-hide@sm" text={task.tags.join(', ')} size={'small'} />
                </div>
                <TaskDetails task={task} />
              </div>
            </Link>
          ))
        }
      </div>
    );
  }
}

export default TaksList;
