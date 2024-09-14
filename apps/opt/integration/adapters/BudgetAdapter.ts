import { Budget } from '@opt/core/interfaces';
import { Currency } from '@opt/core/interfaces/BudgetInterface';
import { BudgetRepository } from '@opt/core/repositories';

import { apiRequest } from '../api';
import { fetcher } from '../swr/config';

export const BudgetAdapter: BudgetRepository = {
  // hooks methods
  getAll: async (): Promise<Budget[]> => {
    return fetcher(`/budget`);
  },
  getById: async (id: number): Promise<Budget | null> => {
    return fetcher(`/budget/${id}`);
  },
  getCurrencies: async (): Promise<Currency[]> => {
    return fetcher(`/budget/currencies/`);
  },
  // actions methods
  create: async (budget: Budget, token: string): Promise<Budget> => {
    return await apiRequest(`/budget`, 'POST', token, budget);
  },
  update: async (
    id: number,
    budget: Budget,
    token: string,
  ): Promise<Budget> => {
    return await apiRequest(`/budget/${id}`, 'PUT', token, budget);
  },
  delete: async (id: number, token: string): Promise<Budget> => {
    return await apiRequest(`/budget/${id}`, 'DELETE', token);
  },
};
