import * as React from 'react';

import IssuePicker from '../IssuePicker';
import { Text } from '../ui';
import './issue-page.scss';

interface Props {};

interface State {};

export class IssueListPage extends React.Component<Props, State> {
  public render() {
    return (
      <div className={'issue-page'}>
        <div className={'issue__header'}>
          <div className="row row--padded" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="col--1-1 col--2-3@lg">
              <Text
                text={'The Issues'}
                color={'inverse'}
                size={'lg'}
                bottomMargin
                displayBlock
              />
              <Text
                text={`Click to select and deselect the issues you care about`}
                type={'header'}
                color={'inverse'}
                displayBlock
              />
            </div>
          </div>
        </div>
        <div className={'issue-list'}>
          <IssuePicker />
        </div>
      </div>
    );
  }
}

export default IssueListPage;
