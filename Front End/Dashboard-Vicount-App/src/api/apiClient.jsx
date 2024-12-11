import axios from 'axios';

const ApiClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    api_key: import.meta.env.VITE_API_KEY,
  },
});

export default ApiClient;