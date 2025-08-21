// src/services/axiosInstance.ts
import axios from 'axios';
import useAuthStore from '../store/authStore';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  config => {
    const token = useAuthStore.getState().token; // Lấy token từ authStore
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`; // Thêm token vào header
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
