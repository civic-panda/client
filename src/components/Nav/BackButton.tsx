import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, user } from '../../modules';
import { Text } from '../ui';
import Link from './NavLink';

interface StateProps {
  location: { name: string };
}

interface ActionProps {}

interface OwnProps {
  currentRoute: string;
}

const BackButton = (props: StateProps & ActionProps & OwnProps, context: any) => {
  switch (props.currentRoute) {
    case 'about':
      return (
        <div className="back-button">
          <Link
            text={props.location ? '‹ Your tasks' : '‹ Get started'}
            to={props.location ? '/tasks' : '/'}
          />
        </div>
      );

    case 'faq':
      return (
        <div className="back-button">
          <Link
            text={props.location ? '‹ Your tasks' : '‹ Get started'}
            to={props.location ? '/tasks' : '/'}
          />
        </div>
      );

    case 'tasks':
      return (
        <div className="back-button">
          <Link text={`‹ ${props.location.name}`} to={'/'} />
        </div>
      );

    case 'task':
      return (
        <div className="back-button">
          <Link text={'‹ All tasks'} to={'/tasks'} />
        </div>
      );

    default:
      return null;
  }
};

const mapStateToProps = (state: AppState) => ({
  location: user.selectors.getLocation(state),
});

export const BackButtonContainer = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(BackButton);
export default BackButtonContainer;
