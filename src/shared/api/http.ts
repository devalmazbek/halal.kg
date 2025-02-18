import axios from 'axios';
import env from '../config';

const api = axios.create({
  baseURL: env.API_URL, // URL из .env
  headers: {
    'Content-Type': 'application/json',
  },
});

// 🔐 Добавляем токен в запрос, если он есть
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🛑 Обработка ошибок (например, разлогинивание при 401)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized! Logging out...');
      localStorage.removeItem('token'); // Удаляем токен
      window.location.href = '/login'; // Перенаправляем на логин
    }
    return Promise.reject(error);
  }
);

export default api;