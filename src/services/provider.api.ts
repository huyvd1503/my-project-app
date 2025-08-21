// my-app/src/services/provider.api.ts
import axiosInstance from './axiosInstance';

export type Post = { id: number; title: string /* other fields */ };

export const getProvider = async (): Promise<Post[]> => {
  const response = await axiosInstance.get<Post[]>(
    `/provider_proposal?page=1&per_page=100&needApproval=0&filters=[]`
  );
  return response.data;
};
