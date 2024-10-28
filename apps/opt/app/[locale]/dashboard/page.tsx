import {
  TripsDataWrapper,
  TripSearch,
  TripSections,
  TripStats,
} from '@opt/components/trips';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <TripsDataWrapper>
        {({ trips }) => (
          <>
            <div className="dashboard__search">
              <TripSearch />
            </div>
            <TripStats trips={trips} />
            <TripSections trips={trips} />
          </>
        )}
      </TripsDataWrapper>
    </div>
  );
}
