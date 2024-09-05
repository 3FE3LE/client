'use client';

import { TripAdapter } from '@opt/integration/adapters';
import { createTripsHooks } from '@opt/integration/hooks';

import { TripActivities } from './TripActivities';
import { TripBudget } from './TripBudget';
import { TripDestinies } from './TripDestinies';

export const TripDetails = ({ id }: { id: string }) => {
  const { useTripById } = createTripsHooks(TripAdapter);

  const { trip, isLoading, isError } = useTripById(id);
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error loading trip details</div>;

  const { budget, destinies, activities } = trip!;

  return (
    trip && (
      <div>
        <h2 className="subtitle--1">{trip.title}</h2>
        <p className="">{trip.description}</p>
        <p className="subtitle--2">{trip.priority}</p>
        <p className="subtitle--2">{trip.tripType}</p>
        <p>Status: {trip.status}</p>
        <TripBudget budget={budget} />
        <TripDestinies destinies={destinies!} />
        <TripActivities activities={activities!} />
      </div>
    )
  );
};
