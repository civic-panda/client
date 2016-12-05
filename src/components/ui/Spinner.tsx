import * as React from 'react';

import './spinner.scss';

interface Props {
  color?: 'white' | 'gray';
}

export const Spinner = (props: Props) => (
  <div className={`ispinner ispinner--animating ${props.color === 'white' ? 'ispinner--white' : 'ispinner--gray'}`}>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
    <div className="ispinner__blade"></div>
  </div>
);

export default Spinner;
