import api from '@opt/lib/axios';

export const getAllTrips = async () => {
  try {
    const response = await api.get(`/plans`);
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
    throw error;
  }
};
