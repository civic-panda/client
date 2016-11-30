import { tasks } from '../modules';

const data: tasks.Task[] = [{
  id: 1,
  name: 'Call your representatives',
  activityType: 'phone call',
  issue: {
    name: 'Test the ui',
    requestedAction: 'click a button',
  },
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
  template: 'CallHouse',
  templateProps: {
    scripts: {
      petition: 'Please do what we ask.',
      thankYou: 'Thanks for doing what we asked!',
    },
  },
}, {
  id: 2,
  name: 'Call your senators',
  activityType: 'phone call',
  issue: {
    name: 'Make sure we can handle multiple tasks',
    requestedAction: 'add multiple tasks',
  },
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
    scripts: {
      petition: 'Please do what we ask.',
      thankYou: 'Thanks for doing what we asked!',
    },
  },
}];

export default data;
