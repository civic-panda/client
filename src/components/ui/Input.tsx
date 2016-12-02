import * as classNames from 'classnames';
import * as React from 'react';

import './input.scss';

type HtmlInput = 'color' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'month' |
  'number' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week' | 'password'

type InputSize = 'short' | 'small' | 'large';

interface InputProps {
  type?: HtmlInput;
  size?: InputSize;
  label?: string;
  name?: string;
  error?: string;
  placeholder?: string;
  value?: string;
  autoFocus?: boolean;
  onChange(event: any): void;
};

export const Input = (props: InputProps) => {
  const { autoFocus, placeholder, size, name, label, value, error, type = 'text', onChange } = props;
  const containerClasses = classNames('input-container', { 'input-container--has-error': !!error });
  const inputClasses = classNames('input', { 'input--has-error': !!error, [`input--${size}`]: !!size });
  const labelClasses = classNames('input-label h5');

  return (
    <div className={containerClasses}>
      <label
        className={labelClasses}
        htmlFor={name}
      >
        {label}
      </label>
      {error && <span className={'input__error'}>{error}</span>}
      <input
        id={name}
        className={inputClasses}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default Input;
