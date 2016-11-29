import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, tasks } from '../modules';
import taskData from './tasks';

interface ActionProps {
  setTasks(tasks: tasks.Task[]): void;
}

interface Props {
  history: any;
  routes: any;
}

export const loadDummyData = (WrappedComponent: React.ComponentClass<{}>) => {
  class LoadData extends React.Component<Props & ActionProps, {}> {
    public componentDidMount() {
      this.props.setTasks(taskData);
    }

    public render() {
      return (<WrappedComponent {...this.props} />);
    }
  }

  const mapActionsToProps = {
    setTasks: tasks.actionCreators.setList,
  };

  return connect<{}, ActionProps, Props>(undefined, mapActionsToProps)(LoadData);
};
