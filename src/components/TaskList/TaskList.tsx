import * as React from 'react';

import { tasks } from '../../modules';
import { Text } from '../ui';
import './task-list.scss';

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
            <div key={task.id} className="task">
              <div className="task__description">
                  <Text
                    text={task.causes.join(', ')}
                    size={'small'}
                    color={'light'}
                    bottomMargin
                  />
                  <Text text={task.name} size={'h2'} bottomMargin />
                  <Text className="u-hide@sm" text={task.tags.join(', ')} size={'small'} />
              </div>
              <div className="task__details">
                <div className={`duration ${this.getDurationClass(task.duration)}`}>
                  <Text text={`${task.duration}`} color={'inverse'} align={'center'} />
                </div>
                <div className="distance">
                  <Text text={'0 miles away'} align={'center'} />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default TaksList;
