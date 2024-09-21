import useSWR from 'swr';

import { Budget, Currency } from '@opt/core/interfaces';
import { BudgetRepository } from '@opt/core/repositories';

import { HookState } from '../types';

export const createBudgetHooks = (repository: BudgetRepository) => ({
  useBudgets: (): HookState<Budget> => {
    const { data, error } = useSWR('/budgets', repository.getAll);
    //
    return {
      results: data || [],
      isLoading: !data && !error,
      isError: error,
    };
  },

  useBudgetById: (id: number): HookState<Budget> => {
    const { data, error } = useSWR(['/budgets', id], () =>
      repository.getById(id),
    );

    return {
      result: data ?? undefined,
      isLoading: !data && !error,
      isError: error,
    };
  },

  useCurrencyList: (): {
    currencies: Currency[];
    isLoading: boolean;
    isError: any;
  } => {
    const { data, error } = useSWR('/currencies', repository.getCurrencies);

    return {
      currencies: data || [],
      isLoading: !data && !error,
      isError: error,
    };
  },
});
