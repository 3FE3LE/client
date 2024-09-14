'use client';

import { notFound } from 'next/navigation';
import { useEffect } from 'react';

import { TripAdapter } from '@opt/integration/adapters';
import { createTripsHooks } from '@opt/integration/hooks';
import { useTripStore } from '@opt/store';

import { TripActivities } from './TripActivities';
import { TripBudget } from './TripBudget';
import { TripDestinies } from './TripDestinies';

export const TripDetails = ({ id }: { id: string }) => {
  const { setTrip } = useTripStore();

  const { useTripById } = createTripsHooks(TripAdapter);

  const { result: trip, isLoading, isError } = useTripById(id);

  useEffect(() => {
    if (trip) setTrip(trip);
  }, [trip]);

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    isError.message === 'Not Found' ? (
      notFound()
    ) : (
      <div>Error loading trip details: {isError.message}</div>
    );

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
