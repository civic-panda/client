import * as React from 'react';

import './fake-news.scss';

const sm = require('./sm.png');
const md = require('./md.png');
const lg = require('./lg.png');
const xl = require('./xl.png');

const embed = '<blockquote style=" background:#FFF; margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px); border-left: 6px solid #ccc!important; border-color: #2196F3!important;">    <div style="padding:8px;">      <div style="padding-left: 5px;white-space: nowrap;">        <a target="_blank">          <img style="border-radius: 16px;height: 32px;top: 0;left: 0;width: 32px;" src="https://res.cloudinary.com/mattc/image/upload/v1484431001/actonthis/issues/logo/ipsk35zqzkd1euozaa4c.png">        </a>        <a style="font-family:Arial,sans-serif; font-weight:700; font-size: 25px;max-width: 44.7732%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;color: #3f729b;padding-left:5px;vertical-align: top;">          Rise        </a>      </div>      <div style="line-height:0; margin-top:40px; text-align:center; width:100%;">        <div style="display:block;position:relative; top:-22px;">          <a target="_blank" href="https://debug-politics.actonthis.org/causes/Rise" class="" style="padding-bottom: 46.8553%; background-color: rgb(255, 255, 255);">            <img src="https://res.cloudinary.com/mattc/image/upload/v1484495878/actonthis/issues/image/gejtfdzowygf0rlxhbt5.png" style="opacity: 1;width: 100%;">          </a>        </div>      </div>      <a style="position: relative; font-family:Arial,sans-serif; font-weight:700; line-height: 20px; line-height:17px; text-decoration: none;" target="_blank" href="https://debug-politics.actonthis.org/causes/Rise">        Give survivors of sexual assault their civil rights. &gt;      </a>    </div>  </blockquote>';

const FakeNewsEmbed = () => (
  <div className="fake-news">
    <img src={sm} className="u-hide@gt-sm article-screenshot" />
    <img src={md} className="u-hide@lt-sm u-hide@gt-md article-screenshot" />
    <img src={lg} className="u-hide@lt-md u-hide@gt-lg article-screenshot" />
    <img src={xl} className="u-hide@lt-lg article-screenshot" />
    <div className="actonthis-embed" dangerouslySetInnerHTML={{ __html: embed }}></div>
  </div>
);

export default FakeNewsEmbed;
