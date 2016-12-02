import * as React from 'react';
import { Link } from 'react-router';

import { issues, tasks } from '../../modules';
import { Text } from '../ui';
import './task-list.scss';
import TaskDetails from './TaskDetails';

interface TaksListProps {
  tasks: tasks.Task[];
  issues: issues.Issue[];
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

  public renderTask = (task: tasks.Task) => (
    <Link key={task.id} to={`/tasks/${task.id}`}>
      <div className="task">
        <div className="task__description">
          <Text
            text={this.props.issues.find(issue => issue.id === task.issueId).name}
            size={'small'}
            color={'light'}
            bottomMargin
          />
          <Text className="task-name" text={task.name} size={'h2'} bottomMargin />
          <Text className="u-hide@sm" text={task.tags.join(', ')} size={'small'} />
        </div>
        <TaskDetails task={task} />
      </div>
    </Link>
  )

  public render() {
    const remainingTasks = this.props.tasks.filter(task => !task.completed);
    const completedTasks = this.props.tasks.filter(task => task.completed);

    return (
      <div className={'task-list'}>
        {remainingTasks.map(this.renderTask)}
        <Text
          text={'Completed'}
          size={'h2'}
          color={'accent'}
          displayBlock
          bottomMargin
        />
        {completedTasks.map(this.renderTask)}
      </div>
    );
  }
}

export default TaksList;
