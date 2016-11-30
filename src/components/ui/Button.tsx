import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router';

type ButtonType = 'primary' | 'secondary';
type ButtonSize = 'small' | 'large';

interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  loading?: boolean;
  children?: string;
  text: string;
  onClick?: (event: any) => void;
};

interface LinkProps extends ButtonProps {
  link: string;
}

// Primary Button
export const Button = (props: ButtonProps) => {
  const nullFn = (): void => null;
  const { type = 'primary', children, size, text, loading, onClick = nullFn, ...otherProps } = props;
  const classes = classNames('button', {
    'button--is-loading': !!loading,
    [`button--${type}`]: !!type,
    [`button--${size}`]: !!size,
  });

  return (
    <button
      className={classes}
      onClick={onClick}
      {...otherProps}
    >
      {text}{children}
    </button>
  );
};

// Link Button
const LinkButton = (props: LinkProps) => {
  const { link, ...otherProps } = props;

  return (
    <Link to={link}>
      <Button {...otherProps} />
    </Link>
  );
};

export {
  Button as default,
  LinkButton as Link,
};