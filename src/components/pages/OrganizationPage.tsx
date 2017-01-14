import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { AppState, issues, tasks } from '../../modules';
import AddressPicker from '../AddressPicker';
import { Text } from '../ui';
import './organization-page.scss';

interface Props {
  params: {
    causeName: string;
  };
};

interface StateProps {
  organization: issues.Issue;
  tasks: tasks.Task[];
};

interface State {};

class OrganizationPage extends React.Component<Props & StateProps, State> {
  public render() {
    return (
      <div className={'organization-page'}>
        <div className={'organization__header'}>
          <div className="row row--padded" style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div className="col--1-1 col--2-3@lg">
              <Text text={this.props.organization.name} color={'inverse'} size={'lg'} displayBlock />
            </div>
          </div>
        </div>
        <AddressPicker />
        <div className={'organization row row--padded'}>
          <div className={'organization__body col--1-1 col--2-3@lg'}>
            <Text
              size={'h4'}
              type={'header'}
              color={'accent'}
              text={`The Organization`}
              displayBlock
              bottomMargin
            />
            <p dangerouslySetInnerHTML={{ __html: this.props.organization.summary }} />
            <br />
            <Text
              size={'h4'}
              type={'header'}
              color={'accent'}
              text={`Key Facts`}
              displayBlock
              bottomMargin
            />
            <div><p dangerouslySetInnerHTML={{ __html: this.props.organization.facts }} /></div>
            <br/>
            <Text
              size={'h4'}
              type={'header'}
              color={'accent'}
              text={`What Can I Do To Help?`}
              displayBlock
              bottomMargin
            />
            <span className="external-links">
              {
                this.props.tasks.map(task => (
                  <Link key={task.id} to={`/tasks/${task.id}`}>
                    <Text
                      size={'p'}
                      type={'body'}
                      text={task.name}
                      displayBlock
                      bottomMargin
                    />
                  </Link>
                ))
              }
            </span>
          </div>
          <div className={'issue__notes col--1-1 col--1-3@lg'}>
            <Text
              size={'h4'}
              type={'header'}
              color={'accent'}
              text={`Additional Reading`}
              displayBlock
              bottomMargin
            />
            <div className="external-links"><p dangerouslySetInnerHTML={{ __html: this.props.organization.reading }} /></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState, ownProps: Props) => {
  const currentOrganization = issues.selectors.getIssueByParam(state, { param: ownProps.params.causeName });

  return {
    organization: currentOrganization,
    tasks: tasks.selectors.getList(state).filter(task => task.issue === currentOrganization.id),
  };
};

const ConnectedPage = connect<StateProps, {}, Props>(mapStateToProps)(OrganizationPage);

export {
  ConnectedPage as OrganizationPage,
}
