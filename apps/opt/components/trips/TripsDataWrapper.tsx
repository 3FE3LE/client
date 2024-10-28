'use client';
// components/TripsDataWrapper.tsx
import { TripAdapter } from '@opt/integration/adapters';
import { createTripsHooks } from '@opt/integration/hooks';

type TripsDataWrapperProps = {
  children: (data: { trips: any[] }) => React.ReactNode;
};

export const TripsDataWrapper = ({ children }: TripsDataWrapperProps) => {
  const { useTrips } = createTripsHooks(TripAdapter);
  const { results: trips, isLoading, isError } = useTrips();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading trips.</div>;

  return <>{children({ trips: trips || [] })}</>;
};
