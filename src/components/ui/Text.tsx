import * as classNames from 'classnames';
import * as React from 'react';

import * as formatters from '../../util/stringFormatters';
import './text.scss';

export type FontSize = 'xxl' | 'xl' | 'lg' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small' | 'xs';
export type FontType = 'header' | 'label' | 'body';
export type FontColor = 'primary' | 'accent' | 'highlight' | 'inverse' | 'light' | 'site-black';
export type FontWeight = 'normal' | 'bold';
export type FontAlignment = 'left' | 'center' | 'right';

export interface TextProps {
  align?: FontAlignment;
  size?: FontSize;
  color?: FontColor;
  type?: FontType;
  format?: formatters.Format | formatters.Format[];
  text?: string;
  weight?: string;
  children?: string;
  className?: string;
  underline?: boolean;
  italic?: boolean;
  bottomMargin?: boolean;
  displayBlock?: boolean;
  horizontalRule?: boolean;
  blockQuote?: boolean;
  onClick?(e: any): void;
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
    underline,
    italic,
    bottomMargin,
    horizontalRule,
    displayBlock,
    blockQuote,
    onClick,
  } = props;

  const classes = classNames({
    [`${align}`]: true,
    [`${size}`]: true,
    [`${color}`]: true,
    [`${type}`]: true,
    [`${weight}`]: true,
    italic,
    underline,
    clickable: !!onClick,
    'display-block': displayBlock,
    'block-quote': blockQuote,
    'horizontal-rule': horizontalRule,
    'remove-bottom-margin': !bottomMargin && !horizontalRule,
  });

  const childrenIsString = typeof children === 'string';
  const rawText = childrenIsString ? `${text ? text : ''}${children}` : text;
  const displayText = (props.format) ? formatters.format(rawText, props.format) : rawText;

  return (
    <span
      className={`text ${classes} ${className}`}
      onClick={onClick}
    >
      {displayText}{!childrenIsString && children}
    </span>
  );
};

export default Text;
