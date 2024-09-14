'use server';
import { cookies } from 'next/headers';

import { Trip } from '@opt/core/interfaces';

import { TripAdapter } from '../adapters';
import { ActionResponse } from '../types';

const token = cookies().get('auth_token')?.value;

// Crear un nuevo trip

export const createTrip = async (trip: Trip): Promise<ActionResponse<Trip>> => {
  try {
    await TripAdapter.create(trip, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to create trip:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to create trip' };
  }
};

// Actualizar un trip existente
export const updateTrip = async (
  id: string,
  trip: Trip,
): Promise<ActionResponse<Trip>> => {
  try {
    const data = await TripAdapter.update(id, trip, token!);
    return { success: true, data };
  } catch (error) {
    console.error('Failed to update trip:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to update trip' };
  }
};

// Eliminar un trip
export const deleteTrip = async (id: string): Promise<ActionResponse<Trip>> => {
  try {
    await TripAdapter.delete(id, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to delete trip:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to delete trip' };
  }
};
