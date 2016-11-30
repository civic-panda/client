import * as moment from 'moment';

export type Format = 'Currency' | 'Date' | 'Uppercase' | 'Phone Number';

interface Formatters {
  [key: string]: (text: string) => string;
}

const formatters: Formatters = {
  Currency: text => `$${text}`,
  Date: date => moment(parseInt(date, 10)).calendar(),
  Uppercase: text => text.toUpperCase(),
  'Phone Number': text => '!' + text,
};

export const format = (text: string, formatList: Format | Format[]) => {
  const formatListArray = (!Array.isArray(formatList))
    ? [formatList]
    : formatList;

  return formatListArray.reduce((a: string, b: Format): string => { return formatters[b](a); }, text);
};
