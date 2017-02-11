import * as React from 'react';
import { Link } from 'react-router';

import { causes, tasks } from '../../modules';
import EmailSignUp from '../EmailSignUp';
import { Button, FadeIn, Input, Text } from '../ui';
import TaskSummary from './TaskSummary';
import './task-list.scss';

interface Props {
  tasks: tasks.Task[];
  completedTasks: tasks.Task[];
  causes: causes.Cause[];
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

  public renderEmpty = () => (
    <div>
      <Text
        text={`Wow you've been busy!`}
        type={'header'}
        size={'lg'}
        displayBlock
        bottomMargin
      />
      <Text
        text={`Looks like youʼve completed all your tasks for right now.`}
        displayBlock
        bottomMargin
      />
      <EmailSignUp />
    </div>
  )

  public render() {
    return (
      <div className={'task-list'}>
        {this.props.tasks.length
          ? this.props.tasks.map(task => (
            <TaskSummary
              key={task.id}
              task={task}
              cause={this.props.causes.find(cause => cause.id === task.causeId)}
            />
          )) : this.renderEmpty()
        }
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
            bottomMargin
            onClick={() => this.setState({ showCompleted: !this.state.showCompleted })}
          />
        </div>
        <FadeIn show={this.state.showCompleted}>
          <div className="completed-task-list">
            {
              this.props.completedTasks
                .map(task => (
                  <TaskSummary
                    key={task.id}
                    task={task}
                    cause={this.props.causes.find(cause => cause.id === task.causeId)}
                  />
                ))
            }
          </div>
        </FadeIn>
      </div>
    );
  }
}

export default TaksList;
