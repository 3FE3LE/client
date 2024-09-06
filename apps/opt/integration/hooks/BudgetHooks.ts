import useSWR from 'swr';

import { Budget } from '@opt/core/interfaces';
import { Currency } from '@opt/core/interfaces/BudgetInterface';
import { BudgetRepository } from '@opt/core/repositories';

export const createBudgetHooks = (repository: BudgetRepository) => ({
  useBudgets: (): { budgets: Budget[]; isLoading: boolean; isError: any } => {
    const { data, error } = useSWR('/budgets', repository.getAll);

    return {
      budgets: data || [],
      isLoading: !data && !error,
      isError: error,
    };
  },

  useBudgetById: (
    id: number,
  ): { budget: Budget | null; isLoading: boolean; isError: any } => {
    const { data, error } = useSWR(['/budgets/', id], () =>
      repository.getById(id),
    );

    return {
      budget: data ?? null,
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
