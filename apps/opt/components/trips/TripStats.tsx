'use client';
import { Calendar, DollarSign, MapPin, Users } from 'lucide-react';
import { useFormatter } from 'next-intl';

import { Trip } from '@opt/core/interfaces';
import { TripStatus } from '@opt/core/interfaces/TripInterface';
import { Card } from '@repo/ui';

export const TripStats = ({ trips }: { trips: Trip[] }) => {
  const format = useFormatter();
  const totalBudget =
    trips?.reduce((sum, trip) => sum + (trip.budget?.amount || 0), 0) ?? 0;

  const totalExpenses =
    trips?.reduce(
      (sum, trip) =>
        sum +
        (trip.expenses?.reduce((sum, expense) => sum + expense.value, 0) || 0),
      0,
    ) ?? 0;

  const totalParticipants =
    trips?.reduce((sum, trip) => sum + trip.members?.length!, 0) ?? 0;

  const averageBudgetPerPerson = totalBudget / totalParticipants;
  const averageExpensesPerPerson = totalExpenses / totalParticipants;

  const upcomingTrips = trips?.reduce((acc: Trip[], trip: Trip) => {
    if (
      trip.status === TripStatus.PLANNING &&
      trip.startDate &&
      new Date(trip.startDate) > new Date()
    ) {
      acc.push(trip);
    }
    return acc;
  }, []);

  const upcomingDate =
    upcomingTrips.length! > 0
      ? format.dateTime(upcomingTrips[0].startDate!, 'd MMM, yyyy')
      : 'No upcoming trips';

  return (
    <div className="dashboard__stats">
      <Card
        title={
          <>
            <MapPin />
            <span className="card__title">Total Trips</span>
          </>
        }
      >
        <span className="card__number">{trips?.length}</span>
      </Card>

      <Card
        title={
          <>
            <span className="card__title">Next Trip</span>
            <Calendar className="card__icon" />
          </>
        }
      >
        <span className="card__number">{upcomingDate}</span>
      </Card>

      <Card
        title={
          <>
            <span className="card__title">Total Budget</span>
            <DollarSign className="card__icon" />
          </>
        }
      >
        <span className="card__number">${totalBudget}</span>
        <span className="card__note">
          Spent: ${totalExpenses} (
          {((totalExpenses! / totalBudget!) * 100).toFixed(1)}%)
        </span>
      </Card>
      <Card
        title={
          <>
            <span className="card__title">Avg. Budget/Person</span>
            <Users className="card__icon" />
          </>
        }
      >
        <span className="card__number">
          ${averageBudgetPerPerson.toFixed(2)}
        </span>
      </Card>

      <Card
        title={
          <>
            <span className="card__title">Avg. Expenses/Person</span>
            <Users className="card__icon" />
          </>
        }
      >
        <span className="card__number">
          $
          {averageExpensesPerPerson
            ? averageExpensesPerPerson.toFixed(2)
            : 'N/A'}
        </span>
      </Card>

      <Card
        title={
          <>
            <span className="card__title">Total Participants</span>
            <Users className="card__icon" />
          </>
        }
      >
        <span className="card__number">{totalParticipants}</span>
      </Card>
    </div>
  );
};
