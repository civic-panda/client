import * as classNames from 'classnames';
import * as React from 'react';

import BackButton from './BackButton';
import './nav.scss';
import Link from './NavLink';

interface Props {
  currentRoute: string;
};

interface State {
  showShadow: boolean;
};

const links = [{
  name: 'About',
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
