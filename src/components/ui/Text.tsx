import * as classNames from 'classnames';
import * as React from 'react';

import * as formatters from '../../util/stringFormatters';
import './text.scss';

type FontSize = 'xl' | 'lg' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small' | 'xs';
type FontType = 'header' | 'label' | 'body';
type FontColor = 'primary' | 'accent' | 'highlight' | 'inverse' | 'light';
type FontWeight = 'normal' | 'bold';
type Alignment = 'left' | 'center' | 'right';

interface TextProps {
  align?: Alignment;
  size?: FontSize;
  color?: FontColor;
  type?: FontType;
  format?: formatters.Format | formatters.Format[];
  text?: string;
  weight?: string;
  children?: string;
  className?: string;
  bottomMargin?: boolean;
  displayBlock?: boolean;
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
    displayBlock,
  } = props;

  const classes = classNames({
    [`${align}`]: true,
    [`${size}`]: true,
    [`${color}`]: true,
    [`${type}`]: true,
    [`${weight}`]: true,
    'display-block': displayBlock,
    'remove-bottom-margin': !bottomMargin,
  });

  const displayText = (!!props.format)
    ? formatters.format(`${text}${children}`, props.format)
    : `${text}${children}`;

  return (
    <span className={`${classes} ${className}`}>{displayText}</span>
  );
};

export default Text;
