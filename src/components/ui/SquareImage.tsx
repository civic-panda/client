import * as React from 'react';

import './square-image.scss';

interface Props {
  url: string;
  className?: string;
  size?: 'large' | 'med';
}

export const SquareImage = (props: Props) => (
  <div
    style={{ backgroundImage: `url(${props.url})` }}
    className={`square-image ${props.size || 'large'} ${props.className}`}
  >
  </div>
);

export default SquareImage;
