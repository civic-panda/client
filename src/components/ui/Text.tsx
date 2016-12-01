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
  italic?: boolean;
  bottomMargin?: boolean;
  displayBlock?: boolean;
  blockQuote?: boolean;
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
    italic,
    bottomMargin,
    displayBlock,
    blockQuote,
  } = props;

  const classes = classNames({
    [`${align}`]: true,
    [`${size}`]: true,
    [`${color}`]: true,
    [`${type}`]: true,
    [`${weight}`]: true,
    italic,
    'display-block': displayBlock,
    'block-quote': blockQuote,
    'remove-bottom-margin': !bottomMargin,
  });

  const childrenIsString = typeof children === 'string';
  const rawText = childrenIsString ? `${text}${children}` : text;
  const displayText = (props.format) ? formatters.format(rawText, props.format) : rawText;

  return (
    <span className={`text ${classes} ${className}`}>{displayText}{!childrenIsString && children}</span>
  );
};

export default Text;
