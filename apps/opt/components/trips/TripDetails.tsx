'use client';

import { createTripsHooks } from '@opt/core/trips/hooks';
import { TripRepositoryApi } from '@opt/infrastructure/api/TripRepository';

export const TripDetails = ({ id }: { id: string }) => {
  const { useTripById } = createTripsHooks(TripRepositoryApi);

  const { trip, isLoading, isError } = useTripById(id);
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error loading trip details</div>;

  const { budget, destinations, status } = trip!;

  return (
    <div>
      TripDetails
      <h1>{trip?.title}</h1>
      <p>{trip?.description}</p>
      <p>Budget: {budget && budget.amount}</p>
      <div>
        {destinations &&
          destinations.map((destination) => (
            <p key={destination.address} className="">
              Destinations: {destination.name}{' '}
            </p>
          ))}
      </div>
      <p>Status: {status}</p>
    </div>
  );
};
