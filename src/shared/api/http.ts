import axios from 'axios';
import env from '../config';

const api = axios.create({
  baseURL: env.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// adding the token to the request, if there is one 
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🛑 Error handling (for example, logging out at 401)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized! Logging out...');
      localStorage.removeItem('token'); // remove token
      window.location.href = '/login'; // redirect to login page
    }
    return Promise.reject(error);
  }
);

export default api;