import * as classNames from 'classnames';
import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, user } from '../../modules';
import { Icon } from '../ui';
import BackButton from './BackButton';
import './nav.scss';
import NavLink from './NavLink';
import PullOutMenu from './PullOutMenu';

interface DispatchProps {
  logOut(): any;
}

interface StateProps {
  isLoggedIn: boolean;
}

interface Props {
  currentRoute: string;
  backgroundColor?: string;
  routeParams: { [key: string]: any };
};

interface State {
  showPullOutMenu: boolean;
};

const links = [{
  name: 'Act On This',
  url: '/',
}];

class Nav extends React.Component<StateProps & DispatchProps & Props, State> {
  public constructor(props: StateProps & DispatchProps & Props) {
    super(props);
    this.state = { showPullOutMenu: false };
  }

  public toggleMenu = (show = !this.state.showPullOutMenu) => {
    const newState = { ...this.state, showPullOutMenu: show };
    this.setState(newState);
  }

  public render() {
    const navClasses = classNames('nav');

    return (
      <div
        className={navClasses}
        style={{ backgroundColor: this.props.backgroundColor || '' }}
      >
        <div className="row row--padded">
          <div className="col col--1-1">
          <BackButton currentRoute={this.props.currentRoute} routeParams={this.props.routeParams} />
          <div className="links">
            { this.props.currentRoute &&
              links
                .map(link => (
                  <NavLink
                    key={link.name}
                    text={link.name}
                    to={link.url}
                    active={link.name === this.props.currentRoute}
                  />
              ))
            }
            {
              this.props.isLoggedIn
                ? (
                  <span onClick={this.props.logOut}>
                    <NavLink
                      text={'Log Out'}
                      to={'/'}
                    />
                  </span>
                ) : (
                  <NavLink
                    text={'Log In'}
                    to={'auth'}
                  />
                )
            }
          </div>
          <div className="nav__bottom-border"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoggedIn: user.selectors.isLoggedIn(state)
})

const mapDispatchToProps = {
  logOut: user.actionCreators.logOut
}

export default connect<StateProps, DispatchProps, Props>(mapStateToProps, mapDispatchToProps)(Nav);
