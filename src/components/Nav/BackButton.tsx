import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { AppState, user, causes, tasks } from '../../modules';
import { Image, Text } from '../ui';
import NavLink from './NavLink';
const logo = require('./act-on-this-logo.png');

interface OwnProps {
  currentRoute: string;
  routeParams: {
    [key: string]: any,
    causeName?: string,
    taskId?: string,
  };
}

interface StateProps {
  cause: causes.Cause;
};

const BackButton = (props: OwnProps & StateProps, context: any) => {
  console.log(props);
  switch (props.currentRoute) {
    case 'cause':
    case 'causeTasks':
      return (
        <div className="back-button">
          {props.cause && props.cause.logoImage &&
            (<Image url={props.cause.logoImage} alt="act on this logo" className={'logo'} />)
          }
        </div>
      );

    case 'task':
      return (
        <div className="back-button">
          <NavLink
            text={'All tasks'}
            to={`/causes/${props.cause.name}/tasks`}
            icon={'left-arrow'}
          />
        </div>
      );

    case 'causeTask':
      return (
        <div className="back-button">
          <NavLink
            text={'All tasks'}
            to={`/causes/${props.routeParams.causeName}/tasks`}
            icon={'left-arrow'}
          />
        </div>
      );

    default:
      return (
        <div className="back-button">
          <Link to={'/'}>
            <img src={logo} alt="act on this logo" className={'logo'} />
          </Link>
        </div>
      );
  }
};

const mapStateToProps = (state: AppState, ownProps: OwnProps) => {
  let cause;
  if (ownProps.routeParams.causeName) {
    cause = causes.selectors.getCauseByParam(state, { param: ownProps.routeParams.causeName });
  } else if (ownProps.routeParams.taskId) {
    const task = tasks.selectors.getTask(state, ownProps.routeParams);
    cause = causes.selectors.getCauseById(task.causeId)(state);
  }

  return { cause };
};

export default connect(mapStateToProps)(BackButton);
