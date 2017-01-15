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

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  public handleScroll = (event: any) => {
    if (event.target.body.scrollTop > 0 && !this.state.showShadow) {
      const newState = { ...this.state, showShadow: true };
      this.setState(newState);
    } else if (event.target.body.scrollTop === 0 && this.state.showShadow) {
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
            currentRoute={this.props.currentRoute}
            isShowing={this.state.showPullOutMenu}
            links={links}
            hide={() => this.toggleMenu(false)}
          />
        </div>
        <div className="row row--padded u-hide@sm">
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
