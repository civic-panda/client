import * as React from 'react';
import { Link } from 'react-router';

import { causes } from '../../modules';
import { Text } from './Text';
import * as Cloudinary from './cloudinaryUrl';
import './cause-info.scss';

interface Props {
  cause: Partial<causes.Cause>;
}

export const CauseInfo = (props: Props) => (
  <div key={props.cause.id} className={'cause-info-box col--1-1'}>
    <div className="col--1-1 col--2-3@md col--5-6@lg">
      <Link to={`/causes/${props.cause.urlFormattedName}`}>
        <Text
          text={props.cause.name}
          type={'header'}
          size={'h2'}
          displayBlock
          bottomMargin
        />
      </Link>
      <Text text={props.cause.blurb} displayBlock />
    </div>
    <div className="col--1-1 col--1-3@md col--1-6@lg cause-logo">
      <img
        src={Cloudinary.createUrl(props.cause.logoImage, { height: 180, width: 180, crop: 'fit' })}
        alt={props.cause.name}
      />
    </div>
  </div>
);
