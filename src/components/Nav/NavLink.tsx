import * as React from 'react';
import { IndexLink, Link as RouterLink } from 'react-router';

import { Icon, IconType, Text } from '../ui';

interface LinkProps {
  to: string;
  text?: string;
  icon?: IconType;
  active?: boolean;
  indexLink?: boolean;
};

interface LinkState {};

export class NavLink extends React.Component<LinkProps, LinkState> {
  public render() {
    const LinkComponent = this.props.indexLink ? IndexLink : RouterLink;
    return (
      <LinkComponent
        className={'link'}
        to={this.props.to}
        activeClassName={'link--is-active'}
        onlyActiveOnIndex={this.props.indexLink}
      >
        {this.props.icon && <Icon type={this.props.icon} />}
        <Text
          format={'Capitalize'}
          text={this.props.text}
          color={this.props.active ? 'highlight' : 'accent'}
          size={'h4'}
          type={'label'}
        />
      </LinkComponent>
    );
  }
}

export default NavLink;
