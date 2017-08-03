import * as classNames from 'classnames';
import * as React from 'react';

import './confetti.scss';

interface Confettiful {
  el: any;
  containerEl: any;
  confettiFrequency: any;
  confettiColors: any;
  confettiAnimations: any;
  _setupElements: any;
  _renderConfetti: any;
}

const Confettiful = function (this: Confettiful, el: any) {
  this.el = el;
  this.containerEl = null;

  this.confettiFrequency = 3;
  this.confettiColors = ['#fce18a', '#ff726d', '#b48def', '#f4306d'];
  this.confettiAnimations = ['slow', 'medium', 'fast'];

  this._setupElements();
  this._renderConfetti();
} as any as { new(el: any): Confettiful; };;

Confettiful.prototype._setupElements = function () {
  const containerEl = document.createElement('div');
  const elPosition = this.el.style.position;

  // if (elPosition !== 'relative' || elPosition !== 'absolute') {
  //   this.el.style.position = 'relative';
  // }

  containerEl.classList.add('confetti-container');

  this.el.appendChild(containerEl);

  this.containerEl = containerEl;
};

Confettiful.prototype._renderConfetti = function () {
  console.log('rendering confetti');
  this.confettiInterval = setInterval(() => {
    const confettiEl = document.createElement('div');
    const confettiSize = (Math.floor(Math.random() * 3) + 7) + 'px';
    const confettiBackground = this.confettiColors[Math.floor(Math.random() * this.confettiColors.length)];
    const confettiLeft = (Math.floor(Math.random() * this.el.offsetWidth)) + 'px';
    const confettiAnimation = this.confettiAnimations[Math.floor(Math.random() * this.confettiAnimations.length)];

    confettiEl.classList.add('confetti', 'confetti--animation-' + confettiAnimation);
    confettiEl.style.left = confettiLeft;
    confettiEl.style.width = confettiSize;
    confettiEl.style.height = confettiSize;
    confettiEl.style.backgroundColor = confettiBackground;

    setTimeout(function () {
      confettiEl.parentNode.removeChild(confettiEl);
    }, 3000);

    this.containerEl.appendChild(confettiEl);
  }, 25);
};


export class Confetti extends React.Component<{}, {}> {
  componentDidMount() {
    new Confettiful(document.querySelector('#confetti-js-container'));
  }

  render() {
    return (
      <div id="confetti-js-container" className="container"></div>
    );
  }
};

export default Confetti;
