import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router';

import './button.scss';
import FadeIn from './FadeIn';
import Spinner from './Spinner';
import Text, { FontColor } from './Text';

type ButtonType = 'primary' | 'secondary' | 'highlighted' | 'colorless';
type ButtonSize = 'small' | 'large';

interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  disabledText?: string;
  color?: FontColor;
  loading?: boolean;
  children?: string;
  text: string;
  preventDefault?: boolean;
  onClick?: (event: any) => void;
};

interface LinkProps extends ButtonProps {
  link: string;
}

// Primary Button
export const Button = (props: ButtonProps) => {
  const nullFn = (): void => null;

  const {
    type = 'primary',
    children = '',
    size,
    text = '',
    loading,
    color,
    onClick = nullFn,
    disabled = false,
    disabledText,
    preventDefault, ...otherProps,
  } = props;

  const classes = classNames(
    'button',
    {
      'button--is-disabled': !!disabled,
      'button--is-loading': !!loading,
      [`button--${type}`]: !!type,
      [`button--${size}`]: !!size,
    }
  );

  const textColor = color || type === 'secondary' ? 'highlight' : type === 'colorless' ? 'primary' : 'inverse';

  const clickHandler = (e: any) => {
    if (preventDefault) {
      e.preventDefault();
      e.stopPropagation();
    }
    onClick(e);
  };

  return (
    <button
      disabled={disabled}
      className={classes}
      onClick={clickHandler}
      {...otherProps}
    >
      <Text
        text={`${text}${children}`}
        type={'label'}
        size={size === 'small' ? 'h5' : 'h4'}
        color={textColor}
        align={'center'}
      />
      <Spinner />
      <FadeIn show={disabled && !!disabledText}>
        <div className="disabled-notification elevation--1">
          {disabledText}
        </div>
      </FadeIn>
    </button>
  );
};

// Link Button
const LinkButton = (props: LinkProps) => {
  const { link, preventDefault, ...otherProps } = props;

  const clickHandler = (e: any) => {
    if (preventDefault) {
      e.stopPropagation();
    }
  };

  return (
    <Link to={link} onClick={clickHandler}>
      <Button {...otherProps} />
    </Link>
  );
};

export {
  Button as default,
  LinkButton as Link,
};
