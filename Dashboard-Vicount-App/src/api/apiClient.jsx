import axios from 'axios';

const ApiClient = axios.create({
  baseURL: 'https://api-management-user-289749981992.asia-southeast2.run.app/',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default ApiClient;