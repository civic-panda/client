import * as classNames from 'classnames';
import * as React from 'react';

import { Icon } from '../ui';
import BackButton from './BackButton';
import './nav.scss';
import NavLink from './NavLink';

interface Props {
  currentRoute: string;
};

interface State {
  showShadow: boolean;
};

const links = [{
  name: 'about',
  url: '/about',
}];

export class Nav extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = { showShadow: false };
  }

  public componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  public handleScroll = (event: any) => {
    if (event.srcElement.body.scrollTop > 0 && !this.state.showShadow) {
      this.setState({ showShadow: true });
    } else if (event.srcElement.body.scrollTop === 0 && this.state.showShadow) {
      this.setState({ showShadow: false });
    }
  };

  public render() {
    const navClasses = classNames('nav', {
      'elevation--0': !this.state.showShadow,
      'elevation--1': this.state.showShadow,
    });

    return (
      <div className={navClasses}>
        <div className="row u-hide@gt-sm">
          <div className="link">
            <Icon type={'hamburger'} />
          </div>
        </div>
        <div className="row u-hide@sm">
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
