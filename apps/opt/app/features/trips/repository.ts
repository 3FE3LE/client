import { createApi } from '@opt/lib/axios';

export const getAllTrips = async (token: string) => {
  try {
    const api = createApi(token);
    const response = await api.get(`/plans`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    throw error;
  }
};
