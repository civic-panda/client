import * as React from 'react';
import { Link as RouterLink } from 'react-router';

import { Text } from '../ui';

interface LinkProps {
  text: string;
  to: string;
};

interface LinkState {};

export class Link extends React.Component<LinkProps, LinkState> {
  public render() {
    return (
      <RouterLink className={'link'} to={this.props.to}>
        <Text text={this.props.text} color={'inverse'} size={'h4'} />
      </RouterLink>
    );
  }
}

export default Link;
