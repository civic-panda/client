import { tasks } from '../modules';

const data: tasks.Task[] = [{
  id: 1,
  completed: false,
  name: 'Call your congress people',
  activityType: 'phone call',
  issueId: 1,
  tags: [
    'example',
    'test',
  ],
  duration: 60,
  startDate: 1480394079073,
  endDate: 1480394079073,
  location: {
    latitude: 1111,
    longitude: 1111,
  },
  notes: 'This is a note on how to complete this task',
  template: 'CallCongress',
  templateProps: {
    requestedAction: 'do a thing',
    scripts: {
      petition: 'Please do what we ask.',
      thankYou: 'Thanks for doing what we asked!',
    },
  },
}, {
  id: 2,
  completed: false,
  name: 'Call your senators',
  activityType: 'phone call',
  issueId: 2,
  tags: [
    'important',
    'test',
  ],
  duration: 30,
  startDate: 1480394079073,
  endDate: 1480394079073,
  location: {
    latitude: 1111,
    longitude: 1111,
  },
  notes: 'This is a note on how to complete this task',
  template: 'CallSenate',
  templateProps: {
    requestedAction: 'do a thing',
    scripts: {
      petition: 'Please do what we ask.',
      thankYou: 'Thanks for doing what we asked!',
    },
  },
}, {
  id: 3,
  completed: false,
  name: 'Call your senators again! Bug the fuck out of them.',
  activityType: 'phone call',
  issueId: 1,
  tags: [
    'important',
    'test',
  ],
  duration: 30,
  startDate: 1480394079073,
  endDate: 1480394079073,
  location: {
    latitude: 1111,
    longitude: 1111,
  },
  notes: 'This is a note on how to complete this task',
  template: 'CallSenate',
  templateProps: {
    requestedAction: 'do a thing',
    scripts: {
      petition: 'Please do what we ask.',
      thankYou: 'Thanks for doing what we asked!',
    },
  },
}];

export default data;
