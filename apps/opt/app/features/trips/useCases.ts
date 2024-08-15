import { getAllTrips } from './repository';

export const useGetTrips = () => {
  const getTrips = async (token: string) => {
    return await getAllTrips(token);
  };
  return { getTrips };
};
