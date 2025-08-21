// src/services/exampleApi.ts
import axiosInstance from './axiosInstance';

export const getPosts = async () => {
  const res = await axiosInstance.get('/posts');
  return res.data;
};
