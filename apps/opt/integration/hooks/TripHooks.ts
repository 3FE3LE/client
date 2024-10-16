import { useCallback } from 'react';
import useSWR from 'swr';

import { Trip } from '@opt/core/interfaces';
import { TripRepository } from '@opt/core/repositories';

import { HookState } from '../types';

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
      result: data ?? undefined,
      isLoading: !data && !error,
      isError: error,
    };
  },
});

// useMapControls.ts
export const useMapControls = (map: google.maps.Map | null) => {
  const addMarker = useCallback(
    (position: google.maps.LatLngLiteral, title: string) => {
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
