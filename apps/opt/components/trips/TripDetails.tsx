'use client';
import { useTripsById } from '../../core/trips/useCases';

export const TripDetails = ({ id }: { id: string }) => {
  const { trip, isLoading, isError } = useTripsById(id);
  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error loading trip details</div>;

  const { budget, destinations, status } = trip;

  return (
    <div>
      TripDetails
      <h1>{trip.title}</h1>
      <p>{trip.description}</p>
      <p>Budget: {budget.amount}</p>
      <div>
        {destinations.map((destination) => (
          <p key={destination.address} className="">
            Destinations: {destination.name}{' '}
          </p>
        ))}
      </div>
      <p>Status: {status.name}</p>
    </div>
  );
};
