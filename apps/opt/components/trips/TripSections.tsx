'use client';
import { Clock, History, MapPin } from 'lucide-react';

import { Trip } from '@opt/core/interfaces';
import { TripStatus } from '@opt/core/interfaces/TripInterface';
import { useTripStore } from '@opt/store';

import { TripsList } from './TripsList';

export const TripSection = ({
  title,
  trips,
}: {
  title: string | JSX.Element;
  trips: Trip[];
}) => {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      {trips.length > 0 ? (
        <TripsList trips={trips} />
      ) : (
        <p className="section__message">You have no {title}</p>
      )}
    </section>
  );
};

export const TripSections = ({ trips }: { trips: Trip[] }) => {
  const { searchTerm } = useTripStore();

  const categorizedTrips = trips?.reduce(
    (
      acc: {
        current: Trip[];
        upcoming: Trip[];
        past: Trip[];
      },
      trip: Trip,
    ) => {
      if (trip.status === TripStatus.COMPLETED) {
        acc.past.push(trip);
      } else if (
        trip.status === TripStatus.PLANNING &&
        trip.startDate &&
        new Date(trip.startDate) > new Date()
      ) {
        acc.upcoming.push(trip);
      } else if (
        trip.status === TripStatus.IN_PROGRESS ||
        trip.status === TripStatus.PLANNING
      ) {
        acc.current.push(trip);
      }
      return acc;
    },
    { current: [], upcoming: [], past: [] },
  );

  const searchTermLower = searchTerm.toLowerCase();
  const searchPredicate = (trip: Trip) => {
    return (
      trip.title.toLowerCase().includes(searchTermLower) ||
      trip.destinies?.some((destiny) =>
        destiny.name?.toLowerCase().includes(searchTermLower),
      )
    );
  };

  const filteredTrips = trips?.filter(searchPredicate);

  return searchTerm ? (
    <TripSection title="Search results" trips={filteredTrips || []} />
  ) : (
    <div className="trip-sections">
      <TripSection
        title={
          <>
            <MapPin />
            Current Trips
          </>
        }
        trips={categorizedTrips?.current!}
      />
      <TripSection
        title={
          <>
            <Clock />
            Upcoming Trips
          </>
        }
        trips={categorizedTrips?.upcoming!}
      />
      <TripSection
        title={
          <>
            <History />
            Past Trips
          </>
        }
        trips={categorizedTrips?.past!}
      />
    </div>
  );
};
