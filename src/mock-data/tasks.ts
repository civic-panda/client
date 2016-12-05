import { tasks } from '../modules';

const data: tasks.Task[] = [{
  id: 1,
  completed: false,
  name: 'Ask Congress to Support the National Popular Vote law',
  activityType: 'phone call',
  issueId: 'electoral-reform',
  tags: [],
  duration: 30,
  startDate: 1480394079073,
  endDate: 1480394079073,
  location: {
    latitude: 1111,
    longitude: 1111,
  },
  notes: 'This is a note on how to complete this task',
  template: 'CallCongress',
  templateProps: {
    requestedAction: 'support the national popular vote law',
    scripts: {
      petition: `
        Hello, my name is ________________.<br><br>
        I want to express my support for the National Popular Vote law which would guarantee the Presidency to the candidate who receives the most popular votes in the entire United States. This plan would ensure that every vote, in every state, will matter in every presidential election.  When we vote for every other office, the candidate who gets the most votes wins. It should be the same for president.<br><br>
        Please support the National Popular Vote Interstate Compact in the next legislative session.<br><br>
        Thank you.
      `,
      thankYou: `
        Hello, my name is ________________.<br><br>
        I’m calling to thank [Rep Name] for the National Popular Vote law which would guarantee the Presidency to the candidate who receives the most popular votes in the entire United States. I’m encouraged to hear that  [Rep Name] is working to ensure that every vote, in every state, will matter in every presidential election.  When we vote for every other office, the candidate who gets the most votes wins. It should be the same for president.<br><br>
        Thank you for your continued support for the National Popular Vote Interstate Compact.
      `,
    },
  },
}];

export default data;
