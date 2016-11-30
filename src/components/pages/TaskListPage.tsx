import * as React from 'react';

import { ListContainer } from '../TaskList';
import TaskMap from '../TaskMap';

interface TaskListPageProps {};

interface TaskListPageState {};

export class TaskListPage extends React.Component<TaskListPageProps, TaskListPageState> {
  public render() {
    return (
      <div className={'row'}>
        <div className="col--12-12 col--8-12@md col--8-12@lg col--7-12@xl col--padded">
          <ListContainer />
        </div>
        <div className="u-hide@lt-md col--4-12@md col--4-12@lg col--5-12@xl col--padded">
          <TaskMap />
        </div>
      </div>
    );
  }
}

export default TaskListPage;
