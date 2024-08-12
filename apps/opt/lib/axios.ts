import axios from 'axios';
import { cookies } from 'next/headers';

const api = axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const token = cookies().get('auth_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token.value}`;
  }
  return config;
});

export default api;
