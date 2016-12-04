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
  name: 'about',
  url: '/about',
}];

export class Nav extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { showShadow: false, showPullOutMenu: false };
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  public handleScroll = (event: any) => {
    if (event.srcElement.body.scrollTop > 0 && !this.state.showShadow) {
      const newState = { ...this.state, showShadow: true };
      this.setState(newState);
    } else if (event.srcElement.body.scrollTop === 0 && this.state.showShadow) {
      const newState = { ...this.state, showShadow: false };
      this.setState(newState);
    }
  };

  public toggleMenu = (show = !this.state.showPullOutMenu) => {
    const newState = { ...this.state, showPullOutMenu: show };
    this.setState(newState);
  }

  public render() {
    const navClasses = classNames('nav', 'elevation--animated', {
      'elevation--0': !this.state.showShadow,
      'elevation--1': this.state.showShadow,
    });

    return (
      <div className={navClasses}>
        <div className="u-hide@gt-sm">
          <div className="link" onClick={() => this.toggleMenu()}>
            <Icon type={'hamburger'} />
          </div>
          <PullOutMenu
            isShowing={this.state.showPullOutMenu}
            hide={() => this.toggleMenu(false)}
          />
        </div>
        <div className="u-hide@sm">
          <BackButton currentRoute={this.props.currentRoute} />
          {this.props.currentRoute === 'tasks' && <NavLink icon={'settings'} to={'issues'} />}
          <div className="links">
            {
              links
                .filter(link => link.name !== this.props.currentRoute)
                .map(link => (
                  <NavLink key={link.name} text={link.name} to={link.url} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
