import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, congress, tasks } from '../modules';
import congressData from './congress';
import taskData from './tasks';

interface ActionProps {
  setTasks(tasks: tasks.Task[]): void;
  setCongress(congress: congress.State): void;
}

interface Props {
  history: any;
  routes: any;
}

export const loadDummyData = (WrappedComponent: React.ComponentClass<{}>) => {
  class LoadData extends React.Component<Props & ActionProps, {}> {
    public componentDidMount() {
      this.props.setTasks(taskData);
      this.props.setCongress(congressData);
    }

    public render() {
      return (<WrappedComponent {...this.props} />);
    }
  }

  const mapActionsToProps = {
    setTasks: tasks.actionCreators.setList,
    setCongress: congress.actionCreators.setCongress,
  };

  return connect<{}, ActionProps, Props>(undefined, mapActionsToProps)(LoadData);
};
