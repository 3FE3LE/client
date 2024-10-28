import { TripsContainer, TripsList } from '@opt/components/trips';
import { redirect, routing } from '@opt/i18n/routing';
import { ActionButton } from '@repo/ui';

export default async function Trips() {
  return (
    <div>
      <header>
        <h2>Trips</h2>
        <form
          action={async () => {
            'use server';
            return redirect({
              href: '/trips/new',
              locale: routing.defaultLocale,
            });
          }}
        >
          <ActionButton variant="primary">Create new Trip</ActionButton>
        </form>
      </header>
      <TripsContainer />
    </div>
  );
}
