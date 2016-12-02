import * as classNames from 'classnames';
import * as React from 'react';

import './icon.scss';

export type IconType = 'phone' | 'info' | 'settings' | 'left-arrow';

interface Props {
  type: IconType;
};

const classMap = {
  phone: 'icon-phone-1',
  info: 'icon-info',
  settings: 'icon-marchingcats-09',
  'left-arrow': 'icon-angle-left',
};

export const Icon = (props: Props) => (
  <span className={`icon ${classMap[props.type]}`}></span>
);

export default Icon;
