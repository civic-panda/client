// TODO host this somewhere better (on free heroku server)
// const corsProxy = 'http://localhost:5000';
const corsProxy = 'https://sunlight-proxy.herokuapp.com';
const apiEndpoint = 'https://congress.api.sunlightfoundation.com';

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
