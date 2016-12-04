import { user } from '../modules';

const mockUser: user.State = {
  id: 0,
  name: 'Joe Plumber',
  location: {
    name: '143 Mott St, New York, NY 10013',
    address: '143 Mott St, New York, NY 10013',
    state: 'NY',
    district: 2,
    latitude: 1234,
    longitude: 1234,
  },
  causes: [],
};

export default mockUser;
