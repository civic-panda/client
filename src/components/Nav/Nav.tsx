import * as classNames from 'classnames';
import * as React from 'react';

import { Icon } from '../ui';
import BackButton from './BackButton';
import './nav.scss';
import NavLink from './NavLink';
import PullOutMenu from './PullOutMenu';

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

export class Nav extends React.Component<Props, State> {
  public constructor(props: Props) {
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
        <div className="row row--padded u-hide@sm">
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
          </div>
          <div className="nav__bottom-border"></div>
        </div>
      </div>
    );
  }
}

export default Nav;
