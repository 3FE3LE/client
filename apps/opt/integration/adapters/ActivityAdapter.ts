import { Activity } from '@opt/core/interfaces';
import { ActivityRepository } from '@opt/core/repositories';

import { apiRequest } from '../api';
import { fetcher } from '../swr/config';

export const ActivityAdapter: ActivityRepository = {
  // hooks methods
  getAll: async (): Promise<Activity[]> => {
    return fetcher(`/activities`);
  },
  getById: async (id: number): Promise<Activity | null> => {
    return fetcher(`/activities/${id}`);
  },
  // actions methods
  create: async (activity: Activity, token: string): Promise<void> => {
    await apiRequest(`/activities`, 'POST', token, activity);
  },
  update: async (
    id: number,
    activity: Activity,
    token: string,
  ): Promise<void> => {
    await apiRequest(`/activities/${id}`, 'PUT', token, activity);
  },
  delete: async (id: number, token: string): Promise<void> => {
    await apiRequest(`/activities/${id}`, 'DELETE', token);
  },
};
