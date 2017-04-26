import * as classNames from 'classnames';
import * as React from 'react';
import * as Forms from 'redux-form';

import '../ui/input.scss';

type HtmlInput = 'color' | 'date' | 'datetime' | 'datetime-local' | 'email' | 'month' |
  'number' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week' | 'password'

type InputSize = 'short' | 'small' | 'large';

export interface InputProps {
  type?: HtmlInput;
  size?: InputSize;
  label?: string;
  name?: string;
  error?: string;
  placeholder?: string;
  value?: string;
  autoFocus?: boolean;
  customInput?: any;
  onChange(event: any): void;
  onFocus?(event: any): void;
  onBlur?(event: any): void;
  input: Forms.WrappedFieldInputProps
};

export const Input = (props: InputProps) => {
  const { autoFocus, placeholder, size, name, label, value, error, type = 'text', onChange, onFocus, onBlur } = props;
  const containerClasses = classNames('input-container', { 'input-container--has-error': !!error });
  const inputClasses = classNames('input', 'elevation--1', { 'input--has-error': !!error, [`input--${size}`]: !!size });
  const labelClasses = classNames('input-label h5');

  return (
    <div
      className={containerClasses}
      style={{
        marginBottom: '1rem',
      }}
    >
      {label && (
        <label
          className={labelClasses}
          htmlFor={name}
          style={{ display: 'block', textAlign: 'left' }}
        >
          {label}
        </label>
      )}
      {error && <span className={'input__error'}>{error}</span>}
      {props.customInput
        ? props.customInput
        : (
          <input
            id={name}
            className={inputClasses}
            type={type}
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            autoFocus={autoFocus}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{ display: 'block' }}
            {...props.input}
          />
        )
      }
    </div>
  );
};

export default Input;
