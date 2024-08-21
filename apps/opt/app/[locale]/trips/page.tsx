import { TripsContainer } from '@opt/components/trips';

export default async function Trips() {
  return (
    <div>
      <header>
        <h2>Trips</h2>
        <button>Create new Trip</button>
      </header>
      <TripsContainer />
    </div>
  );
}
