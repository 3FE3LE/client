import { Destiny } from '@opt/core/interfaces';
import { DestinyRepository } from '@opt/core/repositories';
import { apiRequest } from '@opt/integration/api';

import { fetcher } from '../swr/config';

export const DestinyAdapter: DestinyRepository = {
  // hooks methods
  getAll: async (): Promise<Destiny[]> => {
    return fetcher(`/destiny`);
  },
  getById: async (id: string): Promise<Destiny | null> => {
    return fetcher(`/destiny/${id}`);
  },
  // actions methods
  create: async (destiny: Destiny, token: string): Promise<Destiny> => {
    return await apiRequest(`/destiny`, 'POST', token, destiny);
  },
  update: async (
    id: string,
    destiny: Destiny,
    token: string,
  ): Promise<Destiny> => {
    return await apiRequest(`/destiny/${id}`, 'PUT', token, destiny);
  },
  delete: async (id: string, token: string): Promise<Destiny> => {
    return await apiRequest(`/destiny/${id}`, 'DELETE', token);
  },
};
