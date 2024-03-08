import axios from 'axios';

const BASE_URL = 'https://nkings-server-ed0e61265b1b.herokuapp.com/';

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosAuth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
