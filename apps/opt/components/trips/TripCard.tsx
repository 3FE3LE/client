import { ArrowRight, Plane, User, Users } from 'lucide-react';
import { useFormatter } from 'next-intl';

import { Trip } from '@opt/core/interfaces';
import { TripStatus } from '@opt/core/interfaces/TripInterface';
import { useRouter } from '@opt/i18n/routing';

export const TripCard = ({ trip }: { trip: Trip }) => {
  const router = useRouter();

  const format = useFormatter();
  return (
    <li
      className="trip-list__item"
      onClick={() => router.push(`/trips/${trip.id}`)}
    >
      <div className="trip-list__header">
        <h3 className="trip-list__title">{trip.title}</h3>
        <span
          className={`trip-list__status trip-list__status--${TripStatus[trip.status!].toLowerCase()}`}
        >
          {trip.status}
        </span>
      </div>
      <div className="trip-list__details">
        <Plane className="trip-list__details__icon" />
        {trip.destinies && trip.destinies.length > 0 ? (
          <>
            {trip.destinies[trip.destinies.length - 1].name}{' '}
            {<ArrowRight className="trip-list__details__arrow" />}{' '}
            {trip.destinies[0].name}
          </>
        ) : (
          'Destinies not defined yet'
        )}
      </div>
      <div className="trip-list__content">
        <span>
          {trip.startDate && trip.endDate
            ? `${format.dateTime(trip.startDate, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })} - ${format.dateTime(trip.endDate, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}`
            : 'Dates to be confirmed'}
        </span>
        <span className="trip-list__info">
          {trip.members?.length === 1 ? <User /> : <Users />}
          {trip.members?.length}{' '}
          {trip.members?.length === 1 ? 'person' : 'people'}
        </span>
      </div>
      {trip.budget && (
        <div className="mt-2">
          <div className="trip-list__content">
            <span>
              Budget: ${trip.budget.min} - ${trip.budget.max}
            </span>
            {/* <span>Expenses: ${trip.expenses}</span> */}
          </div>
          <div className="trip-progress">
            <div className="trip-progress__info">
              <span>Budget</span>
              <span>{trip.budget.amount}</span>
              <span>50%</span>
            </div>
            <div className="trip-progress__bar">
              <div
                className="trip-progress__bar__fill"
                style={{ width: '40%' }}
              />
            </div>
          </div>
        </div>
      )}
    </li>
  );
};
