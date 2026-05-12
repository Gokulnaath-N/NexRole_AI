import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { auth } from '../config/firebase';

const baseURL = (import.meta.env.VITE_API_URL || 'http://localhost:5000') + '/api/v1';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      if (config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Don't redirect for unauthenticated endpoints like /auth/sync — they
      // don't need a token. Redirecting on 401 here would create an infinite
      // loop: sync fails → redirect to login → Firebase fires → sync → 401…
      const url = error.config?.url || '';
      if (!url.includes('/auth/sync')) {
        window.location.href = '/auth/login';
      }
    }

    // Preserve the full Axios error so callers can inspect .response
    return Promise.reject(error);
  }
);

export const get = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return api.get<T>(url, config);
};

export const post = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return api.post<T>(url, data, config);
};

export const put = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return api.put<T>(url, data, config);
};

export const del = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  return api.delete<T>(url, config);
};

export default api;
