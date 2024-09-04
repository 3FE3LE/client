// infrastructure/repositories/TripAdapter.ts
import { TripRepository } from '@opt/core/trips/repository';
import { TripType } from '@opt/core/trips/types';
import { apiRequest } from '@opt/integration/api';

import { fetcher } from '../swr/config';

export const TripAdapter: TripRepository = {
  getAllTrips: async (): Promise<TripType[]> => {
    return fetcher(`/trips`);
  },

  getTripById: async (id: string): Promise<TripType | null> => {
    return fetcher(`/trips/${id}`);
  },

  createTrip: async (trip: TripType, token: string): Promise<void> => {
    await apiRequest(`/trips`, 'POST', token, trip);
  },

  updateTrip: async (
    id: string,
    trip: TripType,
    token: string,
  ): Promise<void> => {
    await apiRequest(`/trips/${id}`, 'PUT', token, trip);
  },

  deleteTrip: async (id: string, token: string): Promise<void> => {
    await apiRequest(`/trips/${id}`, 'DELETE', token);
  },
};
