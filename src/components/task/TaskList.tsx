import * as React from 'react';
import { Link } from 'react-router';

import { issues, tasks } from '../../modules';
import { Text } from '../ui';
import './task-list.scss';
import TaskDetails from './TaskDetails';

interface Props {
  tasks: tasks.Task[];
  completedTasks: tasks.Task[];
  issues: issues.Issue[];
};

interface State {
  showCompleted: boolean;
};

export class TaksList extends React.Component<Props, State> {
  public constructor (props: Props) {
    super(props);
    this.state = {
      showCompleted: false,
    };
  }

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
    return (
      <div className={'task-list'}>
        {this.props.tasks.map(this.renderTask)}
        <div className="show-more-link">
          <Text
            text={
              this.state.showCompleted
                ? `Hide completed tasks (${this.props.completedTasks.length})`
                : `Show completed tasks (${this.props.completedTasks.length})`
            }
            size={'h4'}
            color={'highlight'}
            displayBlock
            onClick={() => this.setState({ showCompleted: !this.state.showCompleted })}
          />
        </div>
        {this.state.showCompleted &&
          this.props.completedTasks.map(this.renderTask)
        }
      </div>
    );
  }
}

export default TaksList;
