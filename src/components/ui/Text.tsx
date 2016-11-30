import * as classNames from 'classnames';
import * as React from 'react';

import './text.scss';

type FontSize = 'xl' | 'lg' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small' | 'xs';
type FontType = 'header' | 'label' | 'body';
type FontColor = 'primary' | 'accent' | 'inverse' | 'light';
type FontWeight = 'normal' | 'bold';
type Alignment = 'left' | 'center' | 'right';

interface TextProps {
  align?: Alignment;
  size?: FontSize;
  color?: FontColor;
  type?: FontType;
  text?: string;
  weight?: string;
  children?: string;
  className?: string;
  bottomMargin?: boolean;
};

export const Text = (props: TextProps) => {
  const {
    align = 'left',
    size = 'p',
    type = 'body',
    text = '',
    color = 'primary',
    weight = 'normal',
    children = '',
    className = '',
    bottomMargin,
  } = props;

  const classes = classNames({
    [`${align}`]: true,
    [`${size}`]: true,
    [`${color}`]: true,
    [`${type}`]: true,
    [`${weight}`]: true,
    'remove-bottom-margin': !bottomMargin,
  });

  return (
    <span className={`${classes} ${className}`}>{text}{children}</span>
  );
};

export default Text;
