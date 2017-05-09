import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, congress, causes, tasks, user } from '../modules';
import { loadInitialData } from '../util/api';

interface ActionProps {
  setTasks(tasks: tasks.Task[]): void;
  setCauses(causes: causes.Cause[]): void;
  setCongress(congress: congress.State): void;
  setUser(user: user.State): void;
  subscribe(causeId: number | string): void;
}

interface StateProps {
  isLoaded: boolean;
}

interface Props {
  history?: any;
  routes?: any;
}

export const loadDummyData = (WrappedComponent: React.ComponentClass<Props>) => {
  class LoadData extends React.Component<Props & ActionProps & StateProps, {}> {
    public componentDidMount() {
      this.loadData();
    }

    public loadData = async () => {
      const { causes, tasks } = await loadInitialData();
      this.props.setTasks(tasks);
      this.props.setCauses(causes);
    }

    public render() {
      const { history, routes } = this.props;
      return this.props.isLoaded
        ? (<WrappedComponent history={history} routes={routes} />)
        : null;
    }
  }

  const mapStateToProps = (state: AppState) => ({
    isLoaded: state.storage.isLoaded,
  });

  const mapActionsToProps = {
    setTasks: tasks.actionCreators.setList,
    setCongress: congress.actionCreators.setCongress,
    setCauses: causes.actionCreators.setList,
    setUser: user.actionCreators.set,
    subscribe: causes.actionCreators.subscribe,
  };

  return connect<StateProps, ActionProps, Props>(mapStateToProps, mapActionsToProps)(LoadData);
};
