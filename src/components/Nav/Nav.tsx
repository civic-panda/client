import * as React from 'react';

import Link from './Link';
import './nav.scss';

interface NavProps {};

interface NavState {};

const links = [{
  name: 'FAQ',
  url: 'faq',
}, {
  name: 'About',
  url: 'about',
}];

export class Nav extends React.Component<NavProps, NavState> {
  public render() {
    return (
      <div className={'nav'}>
        <div className="links">
          {
            links.map(link => (
              <Link key={link.name} text={link.name} to={link.url} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Nav;
