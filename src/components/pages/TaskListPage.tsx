import * as React from 'react';

import { TaskListContainer, TaskMap } from '../task';

interface TaskListPageProps {};

interface TaskListPageState {};

export class TaskListPage extends React.Component<TaskListPageProps, TaskListPageState> {
  public render() {
    return (
      <div className={'row row--padded'}>
        <div className="col--1-1 col--2-3@lg">
          <TaskListContainer />
        </div>
        <div className="u-hide@lt-lg col--1-3">
          <TaskMap />
        </div>
      </div>
    );
  }
}

export default TaskListPage;
