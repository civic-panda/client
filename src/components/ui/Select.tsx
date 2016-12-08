import * as classNames from 'classnames';
import * as React from 'react';

import { Input, InputProps } from './Input';
import './select.scss';

interface Props extends InputProps {
  initialValue?: any;
  options: {
    name: string;
    value: any;
  }[];
}

export const Select = (props: Props) => {
  const Picker = (
    <select
      className={classNames('select', 'input', { 'input--short': props.size === 'short' })}
      onChange={props.onChange}
    >
      {props.options.map(option => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
     </select>
  );

  return (
    <Input customInput={Picker} {...props} />
  );
};
