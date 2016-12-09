import { tasks } from '../modules';

const data: any[] = [{
  id: 1,
  name: 'Ask congress to support the National Popular Vote law',
  activityType: 'phone call',
  issueId: 'electoral-reform',
  tags: [],
  duration: 30,
  startDate: 1480394079073,
  endDate: 1480394079073,
  location: { latitude: 1111, longitude: 1111 },
  template: 'CallCongress',
  templateProps: {
    requestedAction: 'support the national popular vote law',
    scripts: {
      petition: `
        Hello, my name is ________________.<br><br>
        I want to express my support for the National Popular Vote law which would guarantee the
        Presidency to the candidate who receives the most popular votes in the entire United States.
        This plan would ensure that every vote, in every state, will matter in every presidential election.
        When we vote for every other office, the candidate who gets the most votes wins. It should be the
        same for president.<br><br>
        Please support the National Popular Vote Interstate Compact in the next legislative session.<br><br>
        Thank you.
      `,
      thankYou: `
        Hello, my name is ________________.<br><br>
        I’m calling to thank [Rep Name] for the National Popular Vote law which would guarantee the Presidency
        to the candidate who receives the most popular votes in the entire United States. I’m encouraged to hear
        that  [Rep Name] is working to ensure that every vote, in every state, will matter in every presidential
        election.  When we vote for every other office, the candidate who gets the most votes wins. It should be
        the same for president.<br><br>
        Thank you for your continued support for the National Popular Vote Interstate Compact.
      `,
    },
  },
}, {
  id: 2,
  name: 'Ask congress to overturn Citizens United with a constitutional amendment',
  issueId: 'campaign-finance-reform',
  activityType: 'phone call',
  tags: [],
  duration: 30,
  startDate: 1480394079073,
  endDate: 1480394079073,
  location: { latitude: 1111, longitude: 1111 },
  template: 'CallCongress',
  templateProps: {
    requestedAction: 'support an amendment to overturn Citizens United',
    scripts: {
      petition: `
        I’m calling to ask for your support on the constitutional amendment to overturn the Citizens United and
        McCutcheon U.S. Supreme Court rulings.<br><br>
        I am writing to ask you to reach across the aisle and ask colleagues from the Republican party to support
        the Udall amendment (S.J.R. 19).<br><br>
        This is not a partisan issue, it's a fundamental democracy issue. Please stand up for the many, instead of
        big money.<br><br>
        Thanks again!
      `,
      thankYou: `
        Thank you for sponsoring the Udall amendment to overturn the Citizens United and McCutcheon U.S. Supreme Court
        rulings.<br><br>
        I appreciate you standing up for the many, instead of big money.<br><br>
        This is not a partisan issue, it's a fundamental democracy issue, and I appreciate you standing up for
        transparent,honest government.<br><br>
        Thanks again!
      `,
    },
  },
}];

export default data;
