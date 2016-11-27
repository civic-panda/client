import * as React from 'react';

interface TaskListPageProps {};

interface TaskListPageState {};

class TaskListPage extends React.Component<TaskListPageProps, TaskListPageState> {
  public render() {
    return (
      <div>
        <div>List of tasks</div>
        <div>Map</div>
      </div>
    );
  }
}

export default TaskListPage;
