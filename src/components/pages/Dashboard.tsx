import * as React from 'react';

import * as UI from '../ui';
import { TaskListContainer } from '../task';

export class Dashboard extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="row row--padded">
        <div className="col col--1-1">
          <UI.Text weight={'bold'} size={'lg'} type={'header'} text={'To do'} bottomMargin displayBlock />
          <TaskListContainer causeId={'d203396d-af7b-40cc-a44d-d51b8a5c334a'} />
        </div>
      </div>
    )
  }
}
