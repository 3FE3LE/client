'use server';

import { cookies } from 'next/headers';

import { Activity } from '@opt/core/interfaces';

import { ActivityAdapter } from '../adapters';
import { ActionResponse } from '../types';

const token = cookies().get('auth_token')?.value;

export const createActivity = async (
  activity: Activity,
): Promise<ActionResponse<Activity>> => {
  try {
    await ActivityAdapter.create(activity, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to create activity:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to create activity' };
  }
};

export const updateActivity = async (
  id: number,
  activity: Activity,
): Promise<ActionResponse<Activity>> => {
  try {
    await ActivityAdapter.update(id, activity, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to update activity:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to update activity' };
  }
};

export const deleteActivity = async (
  id: number,
): Promise<ActionResponse<Activity>> => {
  try {
    await ActivityAdapter.delete(id, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to delete activity:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to delete activity' };
  }
};
