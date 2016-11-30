import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, congress, tasks, user } from '../modules';
import congressData from './congress';
import taskData from './tasks';
import userData from './user';

interface ActionProps {
  setTasks(tasks: tasks.Task[]): void;
  setCongress(congress: congress.State): void;
  setUser(user: user.State): void;
}

interface StateProps {
  isLoaded: boolean;
}

interface Props {
  history: any;
  routes: any;
}

export const loadDummyData = (WrappedComponent: React.ComponentClass<{}>) => {
  class LoadData extends React.Component<Props & ActionProps & StateProps, {}> {
    public componentDidMount() {
      this.props.setTasks(taskData);
      this.props.setCongress(congressData);
      this.props.setUser(userData);
    }

    public render() {
      return this.props.isLoaded
        ? (<WrappedComponent {...this.props} />)
        : (<div>Loading Mock Data</div>);
    }
  }

  const mapStateToProps = (state: AppState) => ({
    isLoaded: state.storage.isLoaded,
  });

  const mapActionsToProps = {
    setTasks: tasks.actionCreators.setList,
    setCongress: congress.actionCreators.setCongress,
    setUser: user.actionCreators.set,
  };

  return connect<StateProps, ActionProps, Props>(mapStateToProps, mapActionsToProps)(LoadData);
};
