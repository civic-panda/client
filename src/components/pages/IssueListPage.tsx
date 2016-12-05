import * as React from 'react';

import IssuePicker from '../IssuePicker';

interface Props {};

interface State {};

export class IssueListPage extends React.Component<Props, State> {
  public render() {
    return (
      <IssuePicker />
    );
  }
}

export default IssueListPage;
