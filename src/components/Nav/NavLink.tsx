import * as React from 'react';
import { Link as RouterLink } from 'react-router';

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
    return (
      <RouterLink
        className={'link'}
        to={this.props.to}
        activeClassName={'link--is-active'}
        onlyActiveOnIndex={this.props.indexLink}
      >
        {this.props.icon && <Icon type={this.props.icon} />}
        <Text
          format={'Capitalize'}
          text={this.props.text}
          color={this.props.active ? 'highlight' : 'inverse'}
          size={'h4'}
          type={'label'}
        />
      </RouterLink>
    );
  }
}

export default NavLink;
