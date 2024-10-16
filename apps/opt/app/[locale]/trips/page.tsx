import { redirect } from 'next/navigation';

import { TripsContainer } from '@opt/components/trips';
import { ActionButton } from '@repo/ui';

export default async function Trips() {
  return (
    <div>
      <header>
        <h2>Trips</h2>
        <form
          action={async () => {
            'use server';
            return redirect('/trips/new');
          }}
        >
          <ActionButton variant="primary">Create new Trip</ActionButton>
        </form>
      </header>
      <TripsContainer />
    </div>
  );
}
