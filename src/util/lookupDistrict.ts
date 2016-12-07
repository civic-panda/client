// TODO host this somewhere better (on free heroku server)
// LOCAL
// const corsProxy = 'http://localhost:5000';
// STAGING
// const corsProxy = 'https://sunlight-proxy-pr-1.herokuapp.com';
// PROD
const corsProxy = 'https://api.actonthis.org';

const lookup = async (lat: number, lng: number) => {
  const result = await fetch(`${corsProxy}/districts/locate?latitude=${lat}&longitude=${lng}`);

  if (result.ok) {
    const body = await result.json();
    return body;
  } else {
    return {
      district: undefined,
      state: undefined,
    };
  }
};

export default lookup;
