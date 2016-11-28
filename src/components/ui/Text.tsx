import * as classNames from 'classnames';
import * as React from 'react';

import './text.scss';

type FontSize = 'xl' | 'lg' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small' | 'xs';
type FontType = 'header' | 'label' | 'body';
type FontColor = 'primary' | 'accent' | 'inverse' | 'light';

interface TextProps {
  size?: FontSize;
  color?: FontColor;
  type?: FontType;
  text?: string;
  children?: string;
  className?: string;
};

export const Text = (props: TextProps) => {
  const {
    size = 'p',
    type = 'body',
    text = '',
    color = 'primary',
    children = '',
    className = '',
  } = props;

  const classes = classNames({
    [`${size}`]: true,
    [`${color}`]: true,
    [`${type}`]: true,
  });

  return (
    <span className={`${classes} ${className}`}>{text}{children}</span>
  );
};

export default Text;
