import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { AppState, user, causes } from '../../modules';
import { Image, Text } from '../ui';
import NavLink from './NavLink';
const logo = require('./act-on-this-logo.png');

interface OwnProps {
  currentRoute: string;
  routeParams: {
    [key: string]: any,
    causeName?: string,
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
            to={'/tasks'}
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

const mapStateToProps = (state: AppState, ownProps: OwnProps) => ({
  cause: ownProps.routeParams.causeName && causes.selectors.getCauseByParam(state, { param: ownProps.routeParams.causeName }),
});

export default connect(mapStateToProps)(BackButton);
