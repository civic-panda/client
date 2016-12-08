import { congress, user } from '../modules';

// TODO host this somewhere better (on free heroku server)
// LOCAL
// const corsProxy = 'http://localhost:5000';
// STAGING
// const corsProxy = 'https://sunlight-proxy-pr-1.herokuapp.com';
// PROD
const corsProxy = 'https://api.actonthis.org';

export const lookupDistrict = async (lat: number, lng: number) => {
  const result = await fetch(`${corsProxy}/districts/locate?latitude=${lat}&longitude=${lng}`);

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
