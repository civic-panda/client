import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, tasks } from '../../modules';
import * as templates from '../task-templates';

interface Props {
  params: {
    taskId: string;
  };
};

interface StateProps {
  task: tasks.Task;
}

interface State {};

const NoTemplate = (props: Props & StateProps) => {
  console.warn('no template found', props);
  return (<div>nope</div>);
};

class TaskPage extends React.Component<Props & StateProps, State> {
  public render() {
    const Template = this.props.task ? templates[this.props.task.template] : null;

    return (
      <div>
        {
          Template
            ? (<Template taskId={parseInt(this.props.params.taskId, 10)} />)
            : (<NoTemplate {...this.props} />)
        }
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: Props) => ({
  task: tasks.selectors.getTask(state, { taskId: parseInt(ownProps.params.taskId, 10) }),
});

const ConnectedPage = connect<StateProps, {}, Props>(mapStateToProps)(TaskPage);

export {
  ConnectedPage as TaskPage,
}
