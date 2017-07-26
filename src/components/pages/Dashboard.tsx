import * as React from 'react';

import { Button, Link, Text } from '../ui';
import { TaskListContainer } from '../task';
interface Props { };

interface State { };

export class Dashboard extends React.Component<Props, State> {
  public render() {
    return (
      <div className="row row--padded">
        <div className="col col--1-1">
          <Text
            size={'lg'}
            type={'header'}
            text={'To do'}
            bottomMargin
            displayBlock
          />
          <TaskListContainer causeId={'d203396d-af7b-40cc-a44d-d51b8a5c334a'} />
        </div>
      </div>
    );
  }
}
