import { Budget } from '@opt/core/interfaces';
import { Currency } from '@opt/core/interfaces/BudgetInterface';
import { BudgetRepository } from '@opt/core/repositories';

import { apiRequest } from '../api';
import { fetcher } from '../swr/config';

export const BudgetAdapter: BudgetRepository = {
  // hooks methods
  getAll: async (): Promise<Budget[]> => {
    return fetcher(`/budgets`);
  },
  getById: async (id: number): Promise<Budget | null> => {
    return fetcher(`/budgets/${id}`);
  },
  getCurrencies: async (): Promise<Currency[]> => {
    return fetcher(`/currencies`);
  },
  // actions methods
  create: async (budget: Budget, token: string): Promise<void> => {
    await apiRequest(`/budgets`, 'POST', token, budget);
  },
  update: async (id: number, budget: Budget, token: string): Promise<void> => {
    await apiRequest(`/budgets/${id}`, 'PUT', token, budget);
  },
  delete: async (id: number, token: string): Promise<void> => {
    await apiRequest(`/budgets/${id}`, 'DELETE', token);
  },
};
