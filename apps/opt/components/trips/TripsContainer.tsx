'use client';

import { TripAdapter } from '@opt/integration/adapters';
import { createTripsHooks } from '@opt/integration/hooks';

import { TripCard } from './TripCard';

export const TripsContainer = () => {
  const { useTrips } = createTripsHooks(TripAdapter);

  const { trips, isLoading, isError } = useTrips();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading trips</div>;

  return (
    <div>
      {trips && trips.map((trip) => <TripCard key={trip.id} {...trip} />)}
    </div>
  );
};
