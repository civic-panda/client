import { congress, issues, tasks, user } from '../modules';

// TODO host this somewhere better (on free heroku server)
// LOCAL
// const apiEndpoint = 'http://localhost:5000';
// STAGING
const apiEndpoint = 'https://act-on-this-api-staging.herokuapp.com';
// PROD
// const apiEndpoint = 'https://api.actonthis.org';

export const lookupDistrict = async (lat: number, lng: number) => {
  const result = await fetch(`${apiEndpoint}/districts/locate?latitude=${lat}&longitude=${lng}`);

  if (result.ok) {
    const body: {
      district: number;
      state: string;
      representatives: congress.CongressPerson[],
      senators: congress.CongressPerson[],
    } = await result.json();
    return body;
  } else {
    return {
      district: undefined,
      state: undefined,
      representatives: [],
      senators: [],
    };
  }
};

export const loadInitialData = async () => {
  const result = await fetch(`${apiEndpoint}/data`);

  if (!result.ok) {
    throw new Error('unable to load data');
  }

  const body: {
    tasks: tasks.Task[],
    issues: issues.Issue[],
  } = await result.json();

  return body;
};

export const loadCommittee = async (committeeId: string, subcommitteeId?: string) => {
  const result = await fetch(`${apiEndpoint}/committees/${committeeId}${subcommitteeId ? '/subcommittees/' + subcommitteeId : ''}`);

  if (!result.ok) {
    throw new Error('unable to load committee');
  }

  const body: {
    members: congress.CongressPerson[];
    committee: congress.Committee[];
    subcommittee: congress.Subcommittee[];
  } = await result.json();

  return body;
};

export const subscribeEmail = async (email: string, issues: string[]) => {
  const result = await fetch(`${apiEndpoint}/email-subscribers`, {
    method: 'POST',
    headers: {
      Origin: 'http://localhost:3001',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, issues }),
  });

  if (!result.ok) {
    throw new Error('unable to subscribe user');
  }

  return true;
};
