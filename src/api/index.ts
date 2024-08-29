import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE
});

api.interceptors.response.use(
  resp => resp,
  async error => {
    return error;
  }
);

export default api;