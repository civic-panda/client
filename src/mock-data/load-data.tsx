import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, congress, issues, tasks, user } from '../modules';
import { loadInitialData } from '../util/api';

interface ActionProps {
  setTasks(tasks: tasks.Task[]): void;
  setIssues(issues: issues.Issue[]): void;
  setCongress(congress: congress.State): void;
  setUser(user: user.State): void;
  subscribe(issueId: number | string): void;
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
      this.loadData();
    }

    public loadData = async () => {
      const { issues, tasks } = await loadInitialData();
      this.props.setTasks(tasks);
      this.props.setIssues(issues);
      issues.forEach(issue => this.props.subscribe(issue.id));
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
    setIssues: issues.actionCreators.setList,
    setUser: user.actionCreators.set,
    subscribe: issues.actionCreators.subscribe,
  };

  return connect<StateProps, ActionProps, Props>(mapStateToProps, mapActionsToProps)(LoadData);
};
