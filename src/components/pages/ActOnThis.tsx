import * as React from 'react';
import { connect } from 'react-redux';

import { AppState, issues, tasks } from '../../modules';
import CausePage from './CausePage';

const ActOnThisDefault = {
  "_id": "587bbee01afc9f002628d30d",
  "name": "Act On This",
  "blurb": "What if there were a way we could change the way organizations who want change in the world work?",
  "brandColor": "#524cff",
  "callToAction": "Want to change policy? Act On This.",
  "facts": "",
  "reading": "",
  "summary": "",
  "placeholderImage": {
    "public_id": "actonthis/issues/placeholderImage/a0wvbjw7jm5r6hkothm0",
    "version": 1484505083,
    "signature": "32e71720262bd8fb5bc044b955ce90d408272dc6",
    "width": 576,
    "height": 576,
    "format": "png",
    "resource_type": "image",
    "url": "http://res.cloudinary.com/mattc/image/upload/v1484505083/actonthis/issues/placeholderImage/a0wvbjw7jm5r6hkothm0.png",
    "secure_url": "https://res.cloudinary.com/mattc/image/upload/v1484505083/actonthis/issues/placeholderImage/a0wvbjw7jm5r6hkothm0.png"
  },
  "image": {
    "public_id": "actonthis/issues/image/zefbf0sifgvhpzb4qydr",
    "version": 1484505083,
    "signature": "6999a3a83ae196e040f9eca6673cdbcb84ba6265",
    "width": 1920,
    "height": 1440,
    "format": "png",
    "resource_type": "image",
    "url": "http://res.cloudinary.com/mattc/image/upload/v1484505083/actonthis/issues/image/zefbf0sifgvhpzb4qydr.png",
    "secure_url": "https://res.cloudinary.com/mattc/image/upload/v1484505083/actonthis/issues/image/zefbf0sifgvhpzb4qydr.png"
  },
  "logo": {
    "public_id": "actonthis/issues/logo/rnclbojr8ydvtardubbi",
    "version": 1484505083,
    "signature": "2203f3a7c61d348fe5bff3296ff50f88e52f1d40",
    "width": 635,
    "height": 252,
    "format": "png",
    "resource_type": "image",
    "url": "http://res.cloudinary.com/mattc/image/upload/v1484505083/actonthis/issues/logo/rnclbojr8ydvtardubbi.png",
    "secure_url": "https://res.cloudinary.com/mattc/image/upload/v1484505083/actonthis/issues/logo/rnclbojr8ydvtardubbi.png"
  },
  "id": "587bbee01afc9f002628d30d"
}

const mapStateToProps = (state: AppState) => ({
  cause: issues.selectors.getIssue(state, { id: '587bbee01afc9f002628d30d' }) || ActOnThisDefault,
  tasks: tasks.selectors.getRemaining(state),
  isLoaded: true,
});

export const ActOnThis = connect(mapStateToProps)(CausePage);
