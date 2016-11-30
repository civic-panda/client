import { congress } from '../modules';

const senators: congress.Senator[] = [{
  id: 0,
  state: 'NY',
  seniority: 'senior',
  fullName: 'Charles Ellis Schumer',
  commonName: 'Chuck Schumer',
  party: 'D',
  phoneNumbers: [
    '5184314070',
    '6077726792',
    '7168464111',
    '6317530978',
    '2124864430',
    '9147341532',
    '5852635866',
    '3154235471',
    '2022246452',
  ],
  address: '780 Third Avenue, Suite 2301 New York, NY 10017',
  email: 'Scheduling_Schumer@schumer.senate.gov',
  ontheissuesUrl: 'http://www.ontheissues.org/Senate/Charles_Schumer.htm',
  committees: [],
}];

const representatives: congress.Representative[] = [{
  id: 0,
  state: 'NY',
  district: 2,
  fullName: 'Peter Thomas "Pete" King',
  commonName: 'Pete King',
  party: 'R',
  phoneNumbers: [
    '2022257896',
    '5165414225',
  ],
  address: '339 Cannon House Office Building Washington, DC 20515',
  email: '',
  ontheissuesUrl: 'http://www.ontheissues.org/NY/Peter_King.htm',
  committees: [],
}];

const committees: congress.Committee[] = [];

export default {
  representatives,
  senators,
  committees,
};
