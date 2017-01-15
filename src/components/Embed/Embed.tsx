import * as React from 'react';

import { Button } from '../ui';

interface State {
  showHtml: boolean;
}

interface Props {
  title: string;
  logo: string;
  image: string;
  link: string;
  callToAction: string;
}

const createHtmlString = ({
  title,
  logo,
  image,
  link,
  callToAction,
}: Props) => {
  const embedString = `<blockquote style=" background:#FFF; margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px); border-left: 6px solid #ccc!important; border-color: #2196F3!important;">
    <div style="padding:8px;">
      <div style="padding-left: 5px;white-space: nowrap;">
        <a target="_blank">
          <img style="border-radius: 16px;height: 32px;top: 0;left: 0;width: 32px;" src="${logo}">
        </a>
        <a style="font-family:Arial,sans-serif; font-weight:700; font-size: 25px;max-width: 44.7732%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color: #3f729b;padding-left:5px;vertical-align: top;">
          ${title}
        </a>
      </div>

      <div style="line-height:0; margin-top:40px; text-align:center; width:100%;">
        <div style="display:block;position:relative; top:-22px;">
          <a target="_blank" href="${link}" class="" style="padding-bottom: 46.8553%; background-color: rgb(255, 255, 255);">
            <img src="${image}" style="opacity: 1;width: 100%;">
          </a>
        </div>
      </div>
      <a style="font-family:Arial,sans-serif; font-weight:700; line-height: 20px; line-height:17px; text-decoration: none;" target="_blank" href="${link}">
        ${callToAction} &gt;
      </a>
    </div>
  </blockquote>`
  return embedString.replace(/(\r\n|\n|\r)/gm, '');
}

export default class Embed extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      showHtml: false
    }
  }

  public render () {
    return (
      <div>
        <Button text={`</> Embed`} onClick={() => this.setState({ showHtml: !this.state.showHtml })} />
        {this.state.showHtml && (
          <div>
            <textarea style={{ width: '100%', height: '120px', margin: '14px 0' }}>
              {createHtmlString(this.props)}
            </textarea>
          </div>
        )}
      </div>
    );
  }
}
