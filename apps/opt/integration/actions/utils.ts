'use server';

import { cookies } from 'next/headers';

import { ActionType } from '@repo/ui/types';

import { ActionResponse } from '../types';

export const executeAction = async <T>(
  actionCallback: (token: string) => Promise<T>,
  actionType: ActionType,
): Promise<ActionResponse> => {
  const token = await (await cookies()).get('auth_token')?.value;
  if (!token) return { success: false, error: 'Authentication token missing' };

  try {
    const data = await actionCallback(token);
    return { success: true, data };
  } catch (error) {
    console.error(`Failed to ${actionType} budget:`, error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: `Failed to ${actionType} budget` };
  }
};
