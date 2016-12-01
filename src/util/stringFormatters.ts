import * as moment from 'moment';

export type Format = 'Currency' | 'Date' | 'Uppercase' | 'Phone Number';

interface Formatters {
  [key: string]: (text: string) => string;
}

function formatPhoneNumber(s: string) {
  const s2 = ('' + s).replace(/\D/g, '');
  const m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!m) ? null : '(' + m[1] + ') ' + m[2] + ' - ' + m[3];
}

const formatters: Formatters = {
  Currency: text => `$${text}`,
  Date: date => moment(parseInt(date, 10)).calendar(),
  Uppercase: text => text.toUpperCase(),
  'Phone Number': formatPhoneNumber,
};

export const format = (text: string, formatList: Format | Format[]) => {
  const formatListArray = (!Array.isArray(formatList))
    ? [formatList]
    : formatList;

  return formatListArray.reduce((a: string, b: Format): string => { return formatters[b](a); }, text);
};
