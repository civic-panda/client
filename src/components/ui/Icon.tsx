import * as classNames from 'classnames';
import * as React from 'react';

type IconType = string;

interface Props {
  type?: IconType;
};

export const Icon = (props: Props) => (
  <span>[{props.type} icon]</span>
);

export default Icon;
