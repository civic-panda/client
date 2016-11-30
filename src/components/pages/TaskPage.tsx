import * as React from 'react';
import { connect } from 'react-redux';

import * as templates from '../task-templates';

interface Props {
  params: {
    taskId: number;
  };
};

interface State {};

export class TaskPage extends React.Component<Props, State> {
  public render() {
    const Template = templates.CallSenate;

    return (
      <div>
        <Template taskId={this.props.params.taskId} />
      </div>
    );
  }
}

export default TaskPage;
