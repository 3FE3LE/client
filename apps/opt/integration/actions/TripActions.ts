'use server';

import { Trip } from '@opt/core/interfaces';
import { ActionType } from '@repo/ui/types';

import { TripAdapter } from '../adapters';
import { ActionResponse } from '../types';
import { executeAction } from './utils';

export const createTrip = async (trip: Trip): Promise<ActionResponse> =>
  executeAction((token) => TripAdapter.create(trip, token), ActionType.CREATE);

export const updateTrip = async (
  id: string,
  trip: Trip,
): Promise<ActionResponse> =>
  executeAction(
    (token) => TripAdapter.update(id, trip, token),
    ActionType.UPDATE,
  );

export const deleteTrip = async (id: string): Promise<ActionResponse> =>
  executeAction((token) => TripAdapter.delete(id, token), ActionType.DELETE);
