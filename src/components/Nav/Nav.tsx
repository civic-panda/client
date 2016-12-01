import * as React from 'react';

import BackButton from './BackButton';
import './nav.scss';
import Link from './NavLink';

interface NavProps {
  currentRoute: string;
};

interface NavState {};

const links = [{
  name: 'FAQ',
  url: '/faq',
}, {
  name: 'About',
  url: '/about',
}];

export class Nav extends React.Component<NavProps, NavState> {
  public render() {
    return (
      <div className={'nav'}>
        <div className="row">
          <BackButton currentRoute={this.props.currentRoute} />
          <div className="links">
            {
              links.map(link => (
                <Link key={link.name} text={link.name} to={link.url} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
