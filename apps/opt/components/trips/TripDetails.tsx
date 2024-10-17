'use client';

import { XIcon } from 'lucide-react';
import { useFormatter } from 'next-intl';
import { notFound } from 'next/navigation';
import { useEffect } from 'react';

import { TripAdapter } from '@opt/integration/adapters';
import { createTripsHooks } from '@opt/integration/hooks';
import { useTripStore } from '@opt/store';
import { ActionButton, FormWrapper, InputField } from '@repo/ui';

import { TripActivities } from './TripActivities';
import { TripBudget } from './TripBudget';
import { TripDestinies } from './TripDestinies';

export const TripDetails = ({ id }: { id: string }) => {
  const { setTrip } = useTripStore();
  const format = useFormatter();

  const { useTripById } = createTripsHooks(TripAdapter);

  const { result: trip, isLoading, isError } = useTripById(id);

  useEffect(() => {
    if (trip) setTrip(trip);
  }, [trip, setTrip]);

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
      <div className="container">
        <header>
          <h2 className="subtitle--1">{trip.title}</h2>
          <p className="">{trip.description}</p>
        </header>
        <p className="subtitle--2">Your trip priority: {trip.priority}</p>
        <p className="subtitle--2">
          the people you are going with: {trip.tripType}
        </p>
        <p>Status: {trip.status}</p>

        <FormWrapper title="Dates" loading={false}>
          <form action="">
            <InputField
              name="Start date"
              type="date"
              value={format.dateTime(trip.startDate!, { dateStyle: 'short' })}
              handleChange={() => {}}
            />
            <InputField
              name="End date"
              type="date"
              value={format.dateTime(trip.endDate!, { dateStyle: 'short' })}
              handleChange={() => {}}
            />
          </form>
          <div className="form__header">
            <ActionButton variant="primary" type="full">
              Save dates
            </ActionButton>
            <ActionButton variant="accent" type="icon">
              <XIcon color="#eeeeee" />
            </ActionButton>
          </div>
        </FormWrapper>

        <TripBudget budget={budget} />
        <TripDestinies destinies={destinies!} />
        <TripActivities activities={activities!} />
      </div>
    )
  );
};
