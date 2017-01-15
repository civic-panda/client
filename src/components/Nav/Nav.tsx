import * as classNames from 'classnames';
import * as React from 'react';

import { Icon } from '../ui';
import BackButton from './BackButton';
import './nav.scss';
import NavLink from './NavLink';
import PullOutMenu from './PullOutMenu';

interface Props {
  currentRoute: string;
};

interface State {
  showShadow: boolean;
  showPullOutMenu: boolean;
};

const links = [{
  name: 'Act On It',
  url: '/tasks',
}, {
  name: 'Issues',
  url: '/issues',
}, {
  name: 'Tasks',
  url: '/task',
}];

export class Nav extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { showShadow: false, showPullOutMenu: false };
  }

  

  public toggleMenu = (show = !this.state.showPullOutMenu) => {
    const newState = { ...this.state, showPullOutMenu: show };
    this.setState(newState);
  }

  public render() {
    const navClasses = classNames('nav');

    return (
      <div className={navClasses}>
        <div className="u-hide@gt-sm">
          <div className="link" onClick={() => this.toggleMenu()}>
            <Icon type={'hamburger'} />
          </div>
          <PullOutMenu
            currentRoute={this.props.currentRoute}
            isShowing={this.state.showPullOutMenu}
            links={links}
            hide={() => this.toggleMenu(false)}
          />
        </div>
        <div className="row row--padded u-hide@sm nav-border">
          <BackButton currentRoute={this.props.currentRoute} />
          <div className="links">
            {
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
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
