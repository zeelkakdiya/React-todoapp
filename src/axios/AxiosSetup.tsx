import axios from 'axios';

let custome_axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
});

export default custome_axios;
