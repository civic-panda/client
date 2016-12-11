import { congress, issues, tasks, user } from '../modules';

// TODO host this somewhere better (on free heroku server)
// LOCAL
// const apiEndpoint = 'http://localhost:5000';
// STAGING
// const apiEndpoint = 'https://sunlight-proxy-pr-1.herokuapp.com';
// PROD
const apiEndpoint = 'https://api.actonthis.org';

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
