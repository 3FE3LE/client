'use client';

import { useTrips } from '../../core/trips/useCases';
import { TripCard } from './TripCard';

export const TripsContainer = () => {
  const { trips, isLoading, isError } = useTrips();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading trips</div>;

  return (
    <div>
      {trips && trips.map((trip: any) => <TripCard key={trip.id} {...trip} />)}
    </div>
  );
};
