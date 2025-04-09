import { Trip } from '@opt/core/interfaces';

import { TripCard } from './TripCard';

export const TripsList = ({ trips }: { trips: Trip[] }) => {
  return (
    <ul className="trip-list">
      {trips && trips.map((trip) => <TripCard key={trip.id} {...{ trip }} />)}
    </ul>
  );
};
