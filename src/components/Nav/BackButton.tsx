import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, user } from '../../modules';
import { Text } from '../ui';
import NavLink from './NavLink';

interface StateProps {
  location: user.Location;
}

interface ActionProps {}

interface OwnProps {
  currentRoute: string;
}

const BackButton = (props: StateProps & ActionProps & OwnProps, context: any) => {
  switch (props.currentRoute) {
    // case 'about':
    // case 'issues':
    //   return (
    //     <div className="back-button">
    //       <NavLink
    //         text={props.location ? 'Your tasks' : 'Get started'}
    //         to={props.location ? '/tasks' : '/'}
    //         icon={'left-arrow'}
    //         indexLink={!props.location}
    //       />
    //     </div>
    //   );

    case 'issue':
      return (
        <div className="back-button">
          <NavLink
            text={'All issues'}
            to={'/issues'}
            icon={'left-arrow'}
          />
        </div>
      );

    // case 'faq':
    //   return (
    //     <div className="back-button">
    //       <NavLink
    //         text={props.location ? 'Your tasks' : 'Get started'}
    //         to={props.location ? '/tasks' : '/'}
    //         icon={'left-arrow'}
    //         indexLink={!props.location}
    //       />
    //     </div>
    //   );

    case 'tasks':
      return (
        <div className="back-button">
          <NavLink
            text={`
              ${props.location.name},
              ${props.location.state}
              ${props.location.district > 0 ? 'District ' + props.location.district : 'At-Large'}
            `}
            to={'/'}
            icon={'left-arrow'}
            indexLink={true}
          />
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

    default:
      return null;
  }
};

const mapStateToProps = (state: AppState) => ({
  location: user.selectors.getLocation(state),
});

export const BackButtonContainer = connect<StateProps, ActionProps, OwnProps>(mapStateToProps)(BackButton);
export default BackButtonContainer;
