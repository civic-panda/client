import { congress, causes, tasks, user } from '../modules';

// TODO host this somewhere better (on free heroku server)
// LOCAL
// const apiEndpoint = 'http://localhost:8080';
// STAGING
const apiEndpoint = 'https://admin-staging.actonthis.org';
// PROD
// const apiEndpoint = 'https://rise-launch.actonthis.org';

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
  try {
    const causesResult = await fetch(`${apiEndpoint}/api/causes`);
    const tasksResult = await fetch(`${apiEndpoint}/api/tasks`);

    if (!causesResult.ok || !tasksResult.ok) {
      throw new Error('unable to load data');
    }

    const body: {
      tasks: tasks.Task[],
      causes: causes.Cause[],
    } = {
      tasks: await tasksResult.json(),
      causes: await causesResult.json(),
    }

    return body;
  } catch (e) {
    console.warn('error fetching data', e);
  }
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

export const subscribeEmail = async (email: string, causes: string[]) => {
  const result = await fetch(`${apiEndpoint}/email-subscribers`, {
    method: 'POST',
    headers: {
      Origin: 'http://localhost:3001',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, causes }),
  });

  if (!result.ok) {
    throw new Error('unable to subscribe user');
  }

  return true;
};
