import { getAllTrips } from './repository';

export const useGetTrips = () => {
  const getTrips = async () => {
    return await getAllTrips();
  };
  return { getTrips };
};
