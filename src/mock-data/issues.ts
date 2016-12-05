import { issues } from '../modules';

const data: issues.Issue[] = [{
  id: 1,
  name: 'User experience testing',
  summary: 'This is the issue summary.',
  facts: ['This is a supporting key fact.', 'When a route has one or more named components, the child elements are available by name on this.props. In this case this.props.children will be undefined. All route components can participate in the nesting.'],
  reading: [{ name: 'Wikipedia', url: 'https://www.wikipedia.org' }],
}, {
  id: 'ui-testing',
  name: 'User interface testing',
  summary: 'This is the issue summary.',
  facts: ['This is a supporting key fact.'],
  reading: [{ name: 'Wikipedia', url: 'https://www.wikipedia.org' }],
}, {
  id: 3,
  name: 'Mock issue number 3',
  summary: 'This is the issue summary.',
  facts: ['This is a supporting key fact.'],
  reading: [{ name: 'Wikipedia', url: 'https://www.wikipedia.org' }],
}, {
  id: 4,
  name: 'Mock issue number 4',
  summary: 'This is the issue summary.',
  facts: ['This is a supporting key fact.'],
  reading: [{ name: 'Wikipedia', url: 'https://www.wikipedia.org' }],
}, {
  id: 5,
  name: 'Mock issue number 5',
  summary: 'This is the issue summary.',
  facts: ['This is a supporting key fact.'],
  reading: [{ name: 'Wikipedia', url: 'https://www.wikipedia.org' }],
}, {
  id: 6,
  name: 'Mock issue number 6 with a really long name',
  summary: 'This is the issue summary.',
  facts: ['This is a supporting key fact.'],
  reading: [{ name: 'Wikipedia', url: 'https://www.wikipedia.org' }],
}, {
  id: 7,
  name: 'Mock issue number 7',
  summary: 'This is the issue summary.',
  facts: ['This is a supporting key fact.'],
  reading: [{ name: 'Wikipedia', url: 'https://www.wikipedia.org' }],
}];

export default data;
