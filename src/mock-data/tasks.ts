import { tasks } from '../modules';

const data: tasks.Task[] = [{
  id: 1,
  name: 'Call your representatives',
  type: [
    'dummy data',
  ],
  causes: [
    'Test the ui',
  ],
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
  steps: [{
    name: 'Call your representative',
    template: 'call',
    templateProps: {
      type: 'house',
    },
  }],
}, {
  id: 2,
  name: 'Call your senators',
  type: [
    'phone call',
  ],
  causes: [
    'Make sure we can handle multiple tasks',
  ],
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
  steps: [{
    name: 'Call your senator',
    template: 'call',
    templateProps: {
      type: 'senate',
    },
  }],
}];

export default data;
