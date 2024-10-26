'use server';

import { Activity } from '@opt/core/interfaces';
import { ActionType } from '@repo/ui/types';

import { ActivityAdapter } from '../adapters';
import { ActionResponse } from '../types';
import { executeAction } from './utils';

export const createActivity = async (
  activity: Activity,
): Promise<ActionResponse> =>
  executeAction(
    (token) => ActivityAdapter.create(activity, token),
    ActionType.CREATE,
  );

export const updateActivity = async (
  id: number,
  activity: Activity,
): Promise<ActionResponse> =>
  executeAction(
    (token) => ActivityAdapter.update(id, activity, token),
    ActionType.UPDATE,
  );

export const deleteActivity = async (id: number): Promise<ActionResponse> =>
  executeAction(
    (token) => ActivityAdapter.delete(id, token),
    ActionType.DELETE,
  );
