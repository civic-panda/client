import * as classNames from 'classnames';
import * as React from 'react';

import './icon.scss';

export type IconType = 'check' | 'phone' | 'hamburger' | 'info' |
  'settings' | 'stopwatch' | 'star' | 'star-outline' | 'left-arrow';

interface Props {
  type: IconType;
  encircle?: boolean;
  className?: string;
};

const classMap = {
  phone: 'icon-phone',
  info: 'icon-info',
  star: 'icon-star',
  hamburger: 'icon-hamburger',
  stopwatch: 'icon-stopwatch',
  settings: 'icon-settings',
  check: 'icon-check',
  'star-outline': 'icon-star-outline',
  'left-arrow': 'icon-angle-left',
};

export const Icon = (props: Props) => (
  <span className={classNames('icon', classMap[props.type], props.className, { encircle: props.encircle })}></span>
);

export default Icon;
