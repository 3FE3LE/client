'use server';

import { Budget } from '@opt/core/interfaces';
import { ActionType } from '@repo/ui/types';

import { BudgetAdapter } from '../adapters';
import { ActionResponse } from '../types';
import { executeAction } from './utils';

export const createBudget = async (budget: Budget): Promise<ActionResponse> =>
  executeAction(
    (token) => BudgetAdapter.create(budget, token),
    ActionType.CREATE,
  );

export const updateBudget = async (
  id: number,
  budget: Budget,
): Promise<ActionResponse> =>
  executeAction(
    (token) => BudgetAdapter.update(id, budget, token),
    ActionType.UPDATE,
  );

export const deleteBudget = async (id: number): Promise<ActionResponse> =>
  executeAction((token) => BudgetAdapter.delete(id, token), ActionType.DELETE);
