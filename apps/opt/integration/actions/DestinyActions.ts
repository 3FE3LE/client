'use server';
import { Destiny } from '@opt/core/interfaces';
import { ActionType } from '@repo/ui/types';

import { DestinyAdapter } from '../adapters';
import { ActionResponse } from '../types';
import { executeAction } from './utils';

export const createDestiny = async (
  destiny: Destiny,
): Promise<ActionResponse> =>
  executeAction(
    (token) => DestinyAdapter.create(destiny, token),
    ActionType.CREATE,
  );

export const updateDestiny = async (
  id: string,
  destiny: Destiny,
): Promise<ActionResponse> =>
  executeAction(
    (token) => DestinyAdapter.update(id, destiny, token),
    ActionType.UPDATE,
  );

export const deleteDestiny = async (id: string): Promise<ActionResponse> =>
  executeAction((token) => DestinyAdapter.delete(id, token), ActionType.DELETE);
