'use server';
import { cookies } from 'next/headers';

import { Budget } from '@opt/core/interfaces';

import { BudgetAdapter } from '../adapters';
import { ActionResponse } from '../types';

const token = cookies().get('auth_token')?.value;

// Crear un nuevo budget

export const createBudget = async (
  budget: Budget,
): Promise<ActionResponse<Budget>> => {
  try {
    const data = await BudgetAdapter.create(budget, token!);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to create budget:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to create budget' };
  }
};

export const updateBudget = async (
  id: number,
  budget: Budget,
): Promise<ActionResponse<Budget>> => {
  try {
    await BudgetAdapter.update(id, budget, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to update budget:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to update budget' };
  }
};

export const deleteBudget = async (
  id: number,
): Promise<ActionResponse<Budget>> => {
  try {
    await BudgetAdapter.delete(id, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to delete budget:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to delete budget' };
  }
};
