import * as React from 'react';

import * as Cloudinary from './cloudinaryUrl';
import './square-image.scss';

interface Props {
  url: string;
  className?: string;
  size?: 'large' | 'med';
}

export const SquareImage = (props: Props) => (
  <div
    style={{ backgroundImage: `url(${Cloudinary.createUrl(props.url, {})})` }}
    className={`square-image ${props.size || 'large'} ${props.className}`}
  >
  </div>
);

export default SquareImage;
