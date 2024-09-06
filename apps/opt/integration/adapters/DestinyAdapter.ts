import { Destiny } from '@opt/core/interfaces';
import { DestinyRepository } from '@opt/core/repositories';
import { apiRequest } from '@opt/integration/api';

import { fetcher } from '../swr/config';

export const DestinyAdapter: DestinyRepository = {
  // hooks methods
  getAll: async (): Promise<Destiny[]> => {
    return fetcher(`/destinies`);
  },
  getById: async (id: string): Promise<Destiny | null> => {
    return fetcher(`/destinies/${id}`);
  },
  // actions methods
  create: async (destiny: Destiny, token: string): Promise<void> => {
    await apiRequest(`/destinies`, 'POST', token, destiny);
  },
  update: async (
    id: string,
    destiny: Destiny,
    token: string,
  ): Promise<void> => {
    await apiRequest(`/destinies/${id}`, 'PUT', token, destiny);
  },
  delete: async (id: string, token: string): Promise<void> => {
    await apiRequest(`/destinies/${id}`, 'DELETE', token);
  },
};
