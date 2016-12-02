import * as classNames from 'classnames';
import * as React from 'react';

type HtmlInput = 'color' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'month' |
  'number' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week' | 'password'

type InputSize = 'small' | 'large';

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

export const Input = ({ autoFocus, name, label, placeholder, value, error, type = 'text', onChange }: InputProps) => {
  const containerClasses = classNames('input-container', { 'input-container--has-error': !!error });
  const inputClasses = classNames('input', { 'input--has-error': !!error });
  const labelClasses = classNames('input__label');

  return (
    <div className={containerClasses}>
      <label className={labelClasses} htmlFor={name}>{label}</label>
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
