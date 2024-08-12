'use server';

import { useGetTrips } from './useCases';

export const GetAllTrips = async () => {
  const { getTrips } = useGetTrips();
  const result = await getTrips();

  return result;
};
