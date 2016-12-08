import * as classNames from 'classnames';
import * as React from 'react';

import './icon.scss';
import { FontColor } from './Text';

export type IconType = 'check' | 'close' | 'phone' | 'hamburger' | 'info' |
  'settings' | 'stopwatch' | 'star' | 'star-outline' | 'left-arrow';

interface Props {
  type: IconType;
  color?: FontColor;
  encircle?: boolean;
  inline?: boolean;
  className?: string;
};

const classMap = {
  phone: 'icon-phone',
  info: 'icon-info-light',
  star: 'icon-star',
  hamburger: 'icon-hamburger',
  stopwatch: 'icon-stopwatch',
  settings: 'icon-settings',
  check: 'icon-check',
  'star-outline': 'icon-star-outline',
  'left-arrow': 'icon-angle-left',
  close: 'icon-close',
};

export const Icon = (props: Props) => {
  const classes = classNames(
    'icon',
    classMap[props.type],
    props.className,
    {
      [`${props.color}`]: !!props.color,
      encircle: props.encircle,
      inline: props.inline,
    }
  );

  return (
    <span className={classes}></span>
  );
};

export default Icon;
