'use client';

import { createTripsHooks } from '@opt/core/trips/hooks';
import { TripRepositoryApi } from '@opt/infrastructure/api/TripRepository';

import { TripCard } from './TripCard';

export const TripsContainer = () => {
  const { useTrips } = createTripsHooks(TripRepositoryApi);

  const { trips, isLoading, isError } = useTrips();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading trips</div>;

  return (
    <div>
      {trips && trips.map((trip) => <TripCard key={trip.id} {...trip} />)}
    </div>
  );
};
