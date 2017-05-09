import * as base64 from 'base-64';
import * as moment from 'moment';

export const decode = (token: string) => {
  const parts = token.split('.');
  const asString = base64.decode(parts[1]);
  const asJson = JSON.parse(asString);
  return asJson;
};

export const getExpiration = (token: string) => {
  const { exp } = decode(token);
  const then = moment(exp * 1000);
  const now = moment();
  return then.diff(now, 'milliseconds');
};
