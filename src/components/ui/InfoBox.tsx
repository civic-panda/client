import * as React from 'react';
import { Link as RouterLink } from 'react-router';

import { Link, FadeIn, Input, Text, SquareImage } from '../ui';
import './info-box.scss';

interface Props {
  title: string;
  description: string;
  label?: string;
  image: string;
  action: {
    name: string;
    url: string;
  };
}

export const InfoBox = (props: Props) => (
  <div className="info-box">
    <div className="info-box__description">
      <div className="info-box__title-block">
        <div className="info-box__title">
          <Text
            className="info-box__title-text"
            text={props.title}
            size={'h1'}
            type={'header'}
            bottomMargin
          />
          {props.label && (
            <div style={{ marginTop: '0.5rem', height: 0 }}>
              <RouterLink to={`/causes/${props.label.split(' ').join('-').toLowerCase()}`}>
                <Text
                  text={props.label}
                  type={'label'}
                  size={'small'}
                />
              </RouterLink>
            </div>
          )}
        </div>
        <div className="info-box__action-button">
          <Link
            text={props.action.name}
            link={props.action.url}
          />
        </div>
      </div>
      <Text
        text={props.description}
        size={'p'}
        displayBlock
      />
    </div>
    <SquareImage url={props.image} size={'med'} />
  </div>
);

export default InfoBox;
