import axios from 'axios';

export const createApi = (token?: string) => {
  const api = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: true,
  });

  if (token) {
    api.interceptors.request.use((config) => {
      config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    });
  }

  return api;
};
