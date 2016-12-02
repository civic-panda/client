import * as React from 'react';
import { Link as RouterLink } from 'react-router';

import { Icon, IconType, Text } from '../ui';

interface LinkProps {
  to: string;
  text?: string;
  icon?: IconType;
};

interface LinkState {};

export class NavLink extends React.Component<LinkProps, LinkState> {
  public render() {
    return (
      <RouterLink className={'link'} to={this.props.to}>
        {this.props.icon && <Icon type={this.props.icon} />}
        <Text
          format={'Capitalize'}
          text={this.props.text}
          color={'inverse'}
          size={'h4'}
        />
      </RouterLink>
    );
  }
}

export default NavLink;
