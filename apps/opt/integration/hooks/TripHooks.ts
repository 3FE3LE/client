import { useCallback } from 'react';
// hooks/useTrips.ts
import useSWR, { mutate } from 'swr';

import { Trip } from '@opt/core/interfaces';
import { TripRepository } from '@opt/core/repositories';

import { ActionResponse, HookState } from '../types';

export const createTripsHooks = (repository: TripRepository) => ({
  useTrips: (): HookState<Trip> => {
    const { data, error } = useSWR('/trips', repository.getAll);

    return {
      results: data || [],
      isLoading: !data && !error,
      isError: error,
    };
  },

  useTripById: (id: string): HookState<Trip> => {
    const { data, error } = useSWR(['/trips', id], () =>
      repository.getById(id),
    );

    return {
      result: data ?? null,
      isLoading: !data && !error,
      isError: error,
    };
  },
  useAction: async (
    action: (...args: any[]) => Promise<ActionResponse<Trip>>,
    args: any[],
  ) => {
    const { data, error } = await action(...args);
    // Refrescar el caché de '/trips'
    mutate('/trips');
    // Si la acción es de actualización o eliminación, refrescar el caché del trip individual
    if (typeof args[0] === 'string') {
      mutate(['/trips', args[0]]); // args[0] es el id del trip
    }

    return {
      data: data,
      isLoading: !data && !error,
      isError: error,
    };
  },
});

// useMapControls.ts
export const useMapControls = (map: google.maps.Map | null) => {
  const addMarker = useCallback(
    (position: google.maps.LatLngLiteral, title: string = 'Nuevo destino') => {
      if (map) {
        map.setCenter(position);
        new google.maps.Marker({
          position,
          map,
          title,
        });
      }
    },
    [map],
  );

  const adjustZoom = useCallback(
    (direction: 'in' | 'out') => {
      if (map) {
        const zoom = map.getZoom() || 0;
        map.setZoom(direction === 'in' ? zoom + 1 : zoom - 1);
      }
    },
    [map],
  );

  const toggleMapType = useCallback(() => {
    if (map) {
      const currentType = map.getMapTypeId();
      const newType =
        currentType === google.maps.MapTypeId.ROADMAP
          ? google.maps.MapTypeId.SATELLITE
          : google.maps.MapTypeId.ROADMAP;
      map.setMapTypeId(newType);
    }
  }, [map]);

  return { addMarker, adjustZoom, toggleMapType };
};
