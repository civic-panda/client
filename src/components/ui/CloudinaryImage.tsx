import * as React from 'react';

import * as Cloudinary from './cloudinaryUrl';

interface Props extends React.HTMLProps<HTMLImageElement> {
  url: string;
  options?: Cloudinary.Options;
}

export const Image = (props: Props) => {
  const { url, options, ...otherProps } = props;
  return (<img src={Cloudinary.createUrl(url, options)} {...otherProps} />)
}
