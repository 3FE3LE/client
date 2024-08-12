import React from 'react';

import { GetAllTrips } from '@opt/app/features/trips/actions';

export default async function Trips() {
  const trips = await GetAllTrips();
  console.log(trips);

  return (
    <div>
      <header>
        <h2>Trips</h2>
        <button>Create new Trip</button>
      </header>
      <div>
        {trips.map((tri: any) => (
          <label key={tri.id}>{tri.name}</label>
        ))}
      </div>
    </div>
  );
}
