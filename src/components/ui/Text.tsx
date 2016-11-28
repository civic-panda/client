import * as classNames from 'classnames';
import * as React from 'react';

type FontSize = 'xl' | 'lg' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small' | 'xs';
type FontType = 'header' | 'label' | 'body';

interface TextProps {
  size?: FontSize;
  type?: FontType;
  text?: string;
  children?: string;
  className?: string;
};

export const Text = ({ size = 'p', type = 'body', text = '', children = '', className = '' }: TextProps) => {
  const classes = classNames({
    [`${size}`]: true,
  });

  return (
    <span className={`${classes} ${className}`}>{text}{children}</span>
  );
};

export default Text;
