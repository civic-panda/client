import * as React from 'react';

interface TaskPageProps {
  params: {
    taskId: number;
  };
};

interface TaskPageState {};

export class TaskPage extends React.Component<TaskPageProps, TaskPageState> {
  public render() {
    return (
      <div>
        <div>Task ID: {this.props.params.taskId}</div>
        <div>Steps</div>
        <div>Summary</div>
      </div>
    );
  }
}

export default TaskPage;
