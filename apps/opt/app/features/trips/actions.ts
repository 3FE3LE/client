'use server';

import { useGetTrips } from './useCases';

export const GetAllTrips = async (token: string) => {
  const { getTrips } = useGetTrips();
  const result = await getTrips(token);

  return result;
};
