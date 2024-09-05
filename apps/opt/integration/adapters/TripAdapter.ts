// infrastructure/repositories/TripAdapter.ts

import { Trip } from '@opt/core/interfaces';
import { TripRepository } from '@opt/core/repositories';
import { apiRequest } from '@opt/integration/api';

import { fetcher } from '../swr/config';

export const TripAdapter: TripRepository = {
  getAll: async (): Promise<Trip[]> => {
    return fetcher(`/trips`);
  },

  getById: async (id: string): Promise<Trip | null> => {
    return fetcher(`/trips/${id}`);
  },

  create: async (trip: Trip, token: string): Promise<void> => {
    await apiRequest(`/trips`, 'POST', token, trip);
  },

  update: async (id: string, trip: Trip, token: string): Promise<void> => {
    await apiRequest(`/trips/${id}`, 'PUT', token, trip);
  },

  delete: async (id: string, token: string): Promise<void> => {
    await apiRequest(`/trips/${id}`, 'DELETE', token);
  },
};
