import { Dispatch } from 'react-redux';

import { AppState, auth, congress, causes, tasks, user } from '../modules';
import { getExpiration } from '../util/jwt';

// LOCAL
// const apiEndpoint = 'http://localhost:8081';
// STAGING
// const apiEndpoint = 'https://admin-staging.actonthis.org';
// PROD
const apiEndpoint = 'https://admin.actonthis.org';


type method = 'GET' | 'PUT' | 'POST' | 'DELETE';

export const lookupStateDistricts = async (lat: number, lng: number) => {
  const result = await fetch(`${apiEndpoint}/openstates/api/v1/legislators/geo/?lat=${lat}&long=${lng}&apikey=3c3cbd0d-c3e0-48eb-ad50-0cbd096a0bdd`);

  if (result.ok) {
    const body: {
      callList: any[],
    } = await result.json();
    return body;
  } else {
    return {
      callList: [],
    };
  }
};

export const lookupDistrict = async (lat: number, lng: number) => {
  const result = await fetch(`${apiEndpoint}/districts/locate?latitude=${lat}&longitude=${lng}`);

  if (result.ok) {
    const body: {
      district: number;
      state: string;
      callList: any[],
      representatives: congress.CongressPerson[];
      senators: congress.CongressPerson[];
    } = await result.json();
    return body;
  } else {
    return {
      district: undefined,
      state: undefined,
      callList: [],
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

export const requestDemo = async (body: { email: string; name?: string; phoneNumber?: string}) => {
  const result = await fetch(`${apiEndpoint}/api/demo-requests`, {
    method: 'POST',
    headers: {
      Origin: 'http://localhost:3001',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!result.ok) {
    throw new Error('unable to request demo');
  }

  return true;
};

export const callApi = async (resource: string, method: method, body?: any, headers?: any) => {
  try {
    const results = await fetch(`${apiEndpoint}/api/${resource}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      }
    });
    if (!results.ok) throw results;
    return await results.json();
  } catch (err) {
    console.warn('api error!', err);
    if (err.status === 401) {
      console.log('should have forced reauthentication');
      alert('authentication error, please log out and back in');
    } else {
      throw err;
    }
  }
}

const refreshToken = async (dispatch: Dispatch<AppState>, getState: any) => {
  const refreshToken = auth.selectors.refreshToken(getState());
  const { token } = await callApi('tokens', 'PUT', { refreshToken });
  dispatch(user.setToken(token));
  return token;
}

export const callAuthenticatedApi = async (dispatch: Dispatch<AppState>, getState: any, resource: string, method: method, body?: any) => {
  const state = getState();
  let token = auth.selectors.token(state);
  const expiresIn = getExpiration(token);

  if (expiresIn <= 0) {
    token = await refreshToken(dispatch, getState);
  }

  const headers = { Authorization: `Bearer ${token}` };
  return await callApi(resource, method, body, headers);
}

