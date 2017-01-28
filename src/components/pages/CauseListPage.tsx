import * as React from 'react';

import CausePicker from '../CausePicker';
import { Text } from '../ui';
import './cause-list-page.scss';

interface Props {};

interface State {};

export class CauseListPage extends React.Component<Props, State> {
  public render() {
    return (
      <div className={'cause-page'}>
        <div className={'cause__header'}>
          <div className="row row--padded" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="col--1-1 col--2-3@lg">
              <Text
                text={'The Causes'}
                size={'lg'}
                type={'header'}
                bottomMargin
                displayBlock
              />
              <Text
                text={`Click to select and deselect the causes you care about`}
                type={'header'}
                displayBlock
              />
            </div>
          </div>
        </div>
        <div className={'cause-list'}>
          <CausePicker />
        </div>
      </div>
    );
  }
}

export default CauseListPage;
