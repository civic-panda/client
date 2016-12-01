import * as classNames from 'classnames';
import * as React from 'react';

import Button from './Button';

type Option = string | { name: string, value: string };

interface Props {
  options: Option[];
  selected?: string;
  select(selected: string): void;
};

export const Toggle = (props: Props) => (
  <div className="toggle">
  {
    props.options.map((option) => (typeof option === 'string')
      ? (
        <Button
          key={option}
          text={option}
          type={option === props.selected ? 'highlighted' : 'secondary'}
          onClick={() => props.select(option)}
          size={'small'}
        />
      ) : (
        <Button
          key={option.value}
          text={option.name}
          type={option.value === props.selected ? 'highlighted' : 'secondary'}
          onClick={() => props.select(option.value)}
          size={'small'}
        />
      )
    )
  }
  </div>
);
