import * as React from 'react';
import { Link } from 'react-router';

import { Text } from '../ui';
import './footer.scss';

export const Footer = () => (
  <div className="footer">
    <div className="row row--padded">
      <div className="col--1-1 col--1-2@md col--1-3@lg">
        <Text size={'h2'} type={'header'} color={'inverse'} displayBlock bottomMargin>Site</Text>
        <Link to={'/'}>
          <Text size={'p'} color={'light'} displayBlock bottomMargin>Home Page</Text>
        </Link>
        <Link to={'/causes/rise'}>
          <Text size={'p'} color={'light'} displayBlock bottomMargin>Rise</Text>
        </Link>
      </div>
      <div className="col--1-1 col--1-2@md col--1-3@lg">
        <Text size={'h2'} type={'header'} color={'inverse'} displayBlock bottomMargin>Follow Us</Text>
        <Text size={'p'} color={'light'} displayBlock bottomMargin italic>Coming Soon!</Text>
      </div>
      <div className="col--1-1 col--1-2@md col--1-3@lg">
        <Text size={'h2'} type={'header'} color={'inverse'} displayBlock bottomMargin>Contact</Text>
        <Text size={'p'} color={'light'} displayBlock bottomMargin italic>Coming Soon!</Text>
      </div>
    </div>
    <div className="row">
      <Text size={'small'} color={'inverse'} align={'right'} displayBlock bottomMargin>© 2016</Text>
    </div>
  </div>
);

export default Footer;
