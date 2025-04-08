'use client';
import { useTripsContext } from '../providers/TripsProvider';
import { TripsList } from './TripsList';

export const TripsContent = () => {
  const { trips, isLoading, isError } = useTripsContext();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading trips.</div>;

  return <TripsList trips={trips} />;
};
