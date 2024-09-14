import useSWR from 'swr';

import { Destiny } from '@opt/core/interfaces';
import { DestinyRepository } from '@opt/core/repositories';

export const createDestinyHooks = (repository: DestinyRepository) => ({
  useDestinies: (): {
    destinies: Destiny[];
    isLoading: boolean;
    isError: any;
  } => {
    const { data, error } = useSWR('/destinies', repository.getAll);

    return {
      destinies: data || [],
      isLoading: !data && !error,
      isError: error,
    };
  },

  useDestinyById: (
    id: string,
  ): { destiny: Destiny | null; isLoading: boolean; isError: any } => {
    const { data, error } = useSWR([`/destinies`, id], () =>
      repository.getById(id),
    );

    return {
      destiny: data ?? null,
      isLoading: !data && !error,
      isError: error,
    };
  },
});
