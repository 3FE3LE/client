'use client';

import {
  ArrowRight,
  Calendar,
  Clock,
  DollarSign,
  History,
  MapPin,
  Plane,
  PlusCircle,
  Search,
  User,
  Users,
} from 'lucide-react';
import { useFormatter } from 'next-intl';
import { useState } from 'react';

import { Trip, TripStatus } from '@opt/core/interfaces/TripInterface';
import { TripAdapter } from '@opt/integration/adapters';
import { createTripsHooks } from '@opt/integration/hooks';
import { useRouter } from '@opt/navigations';
import { ActionButton, InputField } from '@repo/ui';

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  const format = useFormatter();

  const router = useRouter();

  const { useTrips } = createTripsHooks(TripAdapter);

  const { results: allTrips, isError, isLoading } = useTrips();

  const currentTrips = allTrips?.filter(
    (trip) =>
      trip.status === TripStatus.IN_PROGRESS ||
      trip.status === TripStatus.PLANNING,
  );
  const upcomingTrips = allTrips?.filter(
    (trip) =>
      trip.status === TripStatus.PLANNING &&
      new Date(trip.startDate!) > new Date(),
  );
  const pastTrips = allTrips?.filter(
    (trip) => trip.status === TripStatus.COMPLETED,
  );

  const filteredTrips = allTrips?.filter(
    (trip) =>
      trip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.destinies?.some((destiny) =>
        destiny.name?.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
  );

  const renderTripList = (trips: Trip[]) => (
    <ul className="trip-list">
      {trips.map((trip) => (
        <li
          key={trip.id}
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
            {trip.destinies && trip.destinies.length > 0
              ? trip.destinies[trip.destinies.length - 1].name +
                ' ' +
                <ArrowRight className="trip-list__details__arrow" /> +
                ' ' +
                trip.destinies[0].name
              : 'Destinies not defined yet'}
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
      ))}
    </ul>
  );

  const totalBudget = allTrips?.reduce(
    (sum, trip) => sum + (trip.budget?.amount || 0),
    0,
  );
  // const totalExpenses = allTrips?.reduce(
  //   (sum, trip) => sum + (trip.expenses || 0),
  //   0,
  // );
  const totalParticipants = allTrips?.reduce(
    (sum, trip) => sum + trip.members?.length!,
    0,
  );
  const averageBudgetPerPerson = totalBudget! / totalParticipants!;
  // const averageExpensesPerPerson = totalExpenses / totalParticipants;

  return (
    <div className="dashboard">
      <div className="dashboard__search">
        <ActionButton
          variant="primary"
          onClick={() => router.push('/trips/new')}
        >
          <PlusCircle color="#eee" className="btn__icon" /> New Trip
        </ActionButton>
        <InputField
          placeholder="Search trips..."
          value={searchTerm}
          handleChange={(e) => setSearchTerm(e.target.value)}
          name="search"
        >
          <ActionButton type="icon">
            <Search />
          </ActionButton>
        </InputField>
      </div>
      <div className="dashboard__stats">
        <div className="card">
          <div className="card__header">
            <span className="card__title">Total Trips</span>
            <MapPin className="card__icon" />
          </div>
          <div className="card__content">
            <span className="card__number">{allTrips?.length}</span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <span className="card__title">Next Trip</span>
            <Calendar className="card__icon" />
          </div>
          <div className="card__content">
            <span className="card__number">
              {upcomingTrips?.length! > 0
                ? format.dateTime(upcomingTrips?.[0].startDate!, 'd MMM, yyyy')
                : 'No upcoming trips'}
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <span className="card__title">Total Budget</span>
            <DollarSign className="card__icon" />
          </div>
          <div className="card__content">
            <span className="card__number">${totalBudget}</span>
            {/* <span className="card__note">
              Spent: ${totalExpenses} (
              {((totalExpenses! / totalBudget!) * 100).toFixed(1)}%)
            </span> */}
          </div>
        </div>
        <div className="card">
          <div className="card__header">
            <span className="card__title">Avg. Budget/Person</span>
            <Users className="card__icon" />
          </div>
          <div className="card__content">
            <span className="card__number">
              ${averageBudgetPerPerson.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="card">
          <div className="card__header">
            <span className="card__title">Avg. Expenses/Person</span>
            <Users className="card__icon" />
          </div>
          {/* <div className="card__content">
            <span className="card__number">
              ${averageExpensesPerPerson.toFixed(2)}
            </span>
          </div> */}
        </div>

        <div className="card">
          <div className="card__header">
            <span className="card__title">Total Participants</span>
            <Users className="card__icon" />
          </div>
          <div className="card__content">
            <span className="card__number">{totalParticipants}</span>
          </div>
        </div>
      </div>

      {searchTerm ? (
        <section>
          <h2 className="section-title">Search Results</h2>
          {filteredTrips?.length! > 0 ? (
            renderTripList(filteredTrips!)
          ) : (
            <p className="section__message">
              No trips found matching your search.
            </p>
          )}
        </section>
      ) : (
        <div className="trip-sections">
          <section>
            <h2 className="section-title">
              <MapPin />
              Current Trips
            </h2>
            {currentTrips?.length! > 0 ? (
              renderTripList(currentTrips!)
            ) : (
              <p className="section__message">You have no current trips.</p>
            )}
          </section>

          <section>
            <h2 className="section-title">
              <Clock />
              Upcoming Trips
            </h2>
            {upcomingTrips!.length > 0 ? (
              renderTripList(upcomingTrips!)
            ) : (
              <p className="section__message">You have no upcoming trips.</p>
            )}
          </section>

          <section>
            <h2 className="section-title">
              <History />
              Trip History
            </h2>
            {pastTrips!.length > 0 ? (
              renderTripList(pastTrips!.slice(0, 3))
            ) : (
              <p className="section__message">You have no past trips.</p>
            )}
            {pastTrips!.length > 3 && (
              <ActionButton variant="outline">View all trips</ActionButton>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
