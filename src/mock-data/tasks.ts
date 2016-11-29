import { tasks } from '../modules';

const data: tasks.Task[] = [{
  id: 1,
  name: 'Test Task One',
  type: [
    'dummy data',
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
    name: 'Do this first',
    template: 'template string',
    data: {},
  }],
}];

export default data;
