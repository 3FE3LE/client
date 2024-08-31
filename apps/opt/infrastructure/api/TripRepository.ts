// infrastructure/repositories/TripRepositoryApi.ts
import { TripRepository } from '@opt/core/trips/repository';
import { TripType } from '@opt/core/trips/types';
import { apiRequest } from '@opt/infrastructure/api';

import { fetcher } from '../swr/config';

export const TripRepositoryApi: TripRepository = {
  getAllTrips: async (): Promise<TripType[]> => {
    return fetcher(`/trips`);
  },

  getTripById: async (id: string): Promise<TripType | null> => {
    return fetcher(`/trips/?id=${id}`);
  },

  createTrip: async (trip: TripType): Promise<void> => {
    await apiRequest(`/trips`, 'POST', trip);
  },

  updateTrip: async (id: string, trip: TripType): Promise<void> => {
    await apiRequest(`/trips/?id=${id}`, 'PUT', trip);
  },

  deleteTrip: async (id: string): Promise<void> => {
    await apiRequest(`/trips/${id}`, 'DELETE');
  },
};
