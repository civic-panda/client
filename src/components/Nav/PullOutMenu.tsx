import * as classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router';

import { FadeIn, Icon, SlideIn, Text } from '../ui';
import './pull-out-menu.scss';

interface Props {
  isShowing: boolean;
  links: { name: string; url: string }[];
  currentRoute: string;
  hide(): void;
}

class PullOutMenu extends React.Component<Props, {}> {
  public componentWillReceiveProps(nextProps: Props) {
    if (this.props.isShowing !== nextProps.isShowing) {
      document.getElementsByTagName('body')[0].style.overflow = nextProps.isShowing ? 'hidden' : 'initial';
    }
  }

  public render() {
    return (
      <div className="pull-out-menu-container">
        <SlideIn show={this.props.isShowing}>
          <div className="pull-out-menu elevation--5">
            <div className="close-button" onClick={this.props.hide}>
              <Icon type={'close'} />
            </div>
            {
              this.props.links
                .map(link => (
                  <Link
                    key={link.name}
                    className={'mobile-link'}
                    to={link.url}
                    activeClassName={'mobile-link--is-active'}
                    onClick={this.props.hide}
                  >
                    <Text
                      text={link.name}
                      color={'inverse'}
                      type={'label'}
                      size={'h4'}
                      format={['Capitalize']}
                    />
                  </Link>
              ))
            }
          </div>
        </SlideIn>
        <FadeIn show={this.props.isShowing}>
          <div className="page-overlay" onClick={this.props.hide}></div>
        </FadeIn>
      </div>
    );
  };
};

export default PullOutMenu;
