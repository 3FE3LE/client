import useSWR from 'swr';

import { Activity } from '@opt/core/interfaces';
import { ActivityRepository } from '@opt/core/repositories';

export const createActivityHooks = (repository: ActivityRepository) => ({
  useActivities: (): {
    activities: Activity[];
    isLoading: boolean;
    isError: any;
  } => {
    const { data, error } = useSWR('/activities', repository.getAll);

    return {
      activities: data || [],
      isLoading: !data && !error,
      isError: error,
    };
  },
  useActivityById: (
    id: number,
  ): { activity: Activity | null; isLoading: boolean; isError: any } => {
    const { data, error } = useSWR(['/activities', id], () =>
      repository.getById(id),
    );

    return {
      activity: data ?? null,
      isLoading: !data && !error,
      isError: error,
    };
  },
});
