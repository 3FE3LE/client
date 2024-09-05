import useSWR, { mutate } from 'swr';

import { Trip } from '@opt/core/interfaces';
// hooks/useTrips.ts
import { TripRepository } from '@opt/core/repositories';

export const createTripsHooks = (repository: TripRepository) => ({
  useTrips: (): { trips: Trip[]; isLoading: boolean; isError: any } => {
    const { data, error } = useSWR('/trips', repository.getAll);

    return {
      trips: data || [],
      isLoading: !data && !error,
      isError: error,
    };
  },

  useTripById: (
    id: string,
  ): { trip: Trip | null; isLoading: boolean; isError: any } => {
    const { data, error } = useSWR(['/trips/', id], () =>
      repository.getById(id),
    );

    return {
      trip: data ?? null,
      isLoading: !data && !error,
      isError: error,
    };
  },
});
