import * as classNames from 'classnames';
import * as React from 'react';

import { FadeIn, SlideIn } from '../ui';
import './pull-out-menu.scss';

interface Props {
  isShowing: boolean;
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
