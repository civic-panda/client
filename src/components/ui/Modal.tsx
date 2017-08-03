import * as classNames from 'classnames';
import * as React from 'react';

import Text from './Text';
import Button from './Button';
import Confetti from './Confetti';
import './modal.scss';

export interface Props {
  type?: 'task-completed';
  show?: boolean;
  close(): void;
};

export const Modal = (props: Props) => {

  return (
    <div className={classNames({
      'modal-container': true,
      'is-showing': props.type === 'task-completed',
    })}>
      <div className="modal-body">
        <Text size="lg" type="header" bottomMargin displayBlock>
          Task completed!
        </Text>
        <Text size="h4" type="body" bottomMargin displayBlock>
          You've completed another task for Rise.
        </Text>
        <br />
        <Button text="Find more tasks" onClick={props.close} />
      </div>
      <div className="modal-background"></div>
      <Confetti />
    </div>
  );
};

export default Modal;
