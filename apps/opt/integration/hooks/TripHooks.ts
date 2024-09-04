import useSWR, { mutate } from 'swr';

// hooks/useTrips.ts
import { TripRepository } from '@opt/core/trips/repository';
import { TripType } from '@opt/core/trips/types';

export const createTripsHooks = (repository: TripRepository) => ({
  useTrips: (): { trips: TripType[]; isLoading: boolean; isError: any } => {
    const { data, error } = useSWR('/trips', repository.getAllTrips);

    return {
      trips: data || [],
      isLoading: !data && !error,
      isError: error,
    };
  },

  useTripById: (
    id: string,
  ): { trip: TripType | null; isLoading: boolean; isError: any } => {
    const { data, error } = useSWR(['/trips/', id], () =>
      repository.getTripById(id),
    );

    return {
      trip: data ?? null,
      isLoading: !data && !error,
      isError: error,
    };
  },
});
