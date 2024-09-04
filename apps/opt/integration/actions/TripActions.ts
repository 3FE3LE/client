'use server';
import { cookies } from 'next/headers';

import { TripType } from '@opt/core/trips/types';

import { TripAdapter } from '../adapters';
import { ActionResponse } from '../types';

const token = cookies().get('auth_token')?.value;

// Crear un nuevo trip

export const createTrip = async (
  trip: TripType,
): Promise<ActionResponse | undefined> => {
  try {
    const data = await TripAdapter.createTrip(trip, token!);
    console.log(data);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to create trip:', error);
    if (error instanceof Error) return { success: false, error: error.message };
  }
};

// Actualizar un trip existente
export const updateTrip = async (
  id: string,
  trip: TripType,
): Promise<ActionResponse | undefined> => {
  try {
    await TripAdapter.updateTrip(id, trip, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to update trip:', error);
    if (error instanceof Error) return { success: false, error: error.message };
  }
};

// Eliminar un trip
export const deleteTrip = async (
  id: string,
): Promise<ActionResponse | undefined> => {
  try {
    await TripAdapter.deleteTrip(id, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to delete trip:', error);
    if (error instanceof Error) return { success: false, error: error.message };
  }
};
