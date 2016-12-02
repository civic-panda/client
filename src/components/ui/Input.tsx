import * as classNames from 'classnames';
import * as React from 'react';

import './input.scss';

type HtmlInput = 'text' | 'color' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'month' |
  'number' | 'range' | 'search' | 'tel' | 'time' | 'url' | 'week' | 'password'

type InputSize = 'small' | 'large';

interface InputProps {
  type?: HtmlInput;
  size?: InputSize;
  label?: string;
  placeholder?: string;
  name?: string;
  error?: string;
  value?: string;
  autoFocus?: boolean;
  onChange(event: any): void;
};

export const Input = ({ autoFocus, placeholder, name, label, value, error, type = 'text', onChange }: InputProps) => {
  const containerClasses = classNames('input-container', { 'input-container--has-error': !!error });
  const inputClasses = classNames('input', { 'input--has-error': !!error });
  const labelClasses = classNames('input__label');

  return (
    <div className={containerClasses}>
      <label className={labelClasses} htmlFor={name}>{label}</label>
      {error && <span className={'input__error'}>{error}</span>}
      <input
        id={name}
        placeholder={placeholder}
        className={inputClasses}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        autoFocus={autoFocus}
      />
    </div>
  );
};

export default Input;
