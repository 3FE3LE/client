'use server';
import { cookies } from 'next/headers';

import { Destiny } from '@opt/core/interfaces';

import { DestinyAdapter } from '../adapters';
import { ActionResponse } from '../types';

const token = cookies().get('auth_token')?.value;

// Crear un nuevo destino

export const createDestiny = async (
  destiny: Destiny,
): Promise<ActionResponse> => {
  try {
    await DestinyAdapter.create(destiny, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to create destiny:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to create destiny' };
  }
};

// Actualizar un destino existente
export const updateDestiny = async (
  id: string,
  destiny: Destiny,
): Promise<ActionResponse> => {
  try {
    await DestinyAdapter.update(id, destiny, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to update destiny:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to update destiny' };
  }
};

// Eliminar un destino
export const deleteDestiny = async (id: string): Promise<ActionResponse> => {
  try {
    await DestinyAdapter.delete(id, token!);
    return { success: true };
  } catch (error) {
    console.error('Failed to delete destiny:', error);
    if (error instanceof Error) return { success: false, error: error.message };
    return { success: false, error: 'Failed to delete destiny' };
  }
};
