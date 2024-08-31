import useSWR, { mutate } from 'swr';

import { apiRequest } from '@opt/infrastructure/api';

import { TripType } from './types/index';

// Hook para obtener datos de trips
export const useTrips = (): {
  trips: TripType[];
  isLoading: boolean;
  isError: any;
} => {
  const { data, error } = useSWR('/trips');

  return {
    trips: data,
    isLoading: !data && !error,
    isError: error,
  };
};

// Hook para obtener datos de un trip específico por id
export const useTripsById = (
  id: string,
): { trip: TripType; isLoading: boolean; isError: any } => {
  const { data, error } = useSWR('/trips/?id=' + id);

  return {
    trip: data,
    isLoading: !data && !error,
    isError: error,
  };
};

// Función para crear un nuevo trip
export const createTrip = async (tripData: TripType) => {
  await apiRequest(
    `${process.env.NEXT_PUBLIC_API_URL}/trips`,
    'POST',
    tripData,
  );
  mutate('/trips'); // Revalidar caché para que se actualicen los datos
};

// Función para actualizar un trip existente
export const updateTrip = async (id: string, tripData: TripType) => {
  await apiRequest(
    `${process.env.NEXT_PUBLIC_API_URL}/trips/?id=${id}`,
    'PUT',
    tripData,
  );
  mutate('/trips'); // Revalidar caché para que se actualicen los datos
};

// Función para eliminar un trip
export const deleteTrip = async (id: string) => {
  await apiRequest(`${process.env.NEXT_PUBLIC_API_URL}/trips/${id}`, 'DELETE');
  mutate('/trips'); // Revalidar caché para que se actualicen los datos
};
