'use client';
import { useTripsContext } from '../providers/TripsProvider';
import { TripSearch, TripSections, TripStats } from '../trips';

export const DashboardContent = () => {
  const { trips, isLoading, isError } = useTripsContext();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading trips.</div>;

  return (
    <>
      <div className="dashboard__search">
        <TripSearch />
      </div>
      <TripStats trips={trips} />
      <TripSections trips={trips} />
    </>
  );
};
