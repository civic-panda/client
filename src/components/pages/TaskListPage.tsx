import * as React from 'react';

import { TaskListContainer, TaskMap } from '../task';
import { Text } from '../ui';
import './task-page.scss';

interface TaskListPageProps {};

interface TaskListPageState {};

export class TaskListPage extends React.Component<TaskListPageProps, TaskListPageState> {
  public render() {
    return (
      <div className="task-page">
        <div className={'task__header'}>
          <div className="row row--padded" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="col--1-1 col--2-3@lg">
              <Text
                text={'Your task list'}
                color={'inverse'}
                size={'lg'}
                displayBlock
              />
            </div>
          </div>
        </div>
        <div className={'row row--padded'}>
          <div className="col--1-1 col--2-3@lg">
            <TaskListContainer />
          </div>
          <div className="u-hide@lt-lg col--1-3">
            <TaskMap />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskListPage;
