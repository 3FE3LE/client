// core/trips/useCases.ts
import { TripRepository } from './repository';
import { TripType } from './types';

export const createTripUseCases = (repository: TripRepository) => ({
  // Crear un nuevo trip
  createTrip: async (trip: TripType): Promise<void> => {
    await repository.createTrip(trip);
  },

  // Actualizar un trip existente
  updateTrip: async (id: string, trip: TripType): Promise<void> => {
    await repository.updateTrip(id, trip);
  },

  // Eliminar un trip
  deleteTrip: async (id: string): Promise<void> => {
    await repository.deleteTrip(id);
  },
});
