import { TripsProvider } from '@opt/components/providers/TripsProvider';
import { TripsContent } from '@opt/components/trips';

export default async function Trips() {
  return (
    <TripsProvider>
      <TripsContent />
    </TripsProvider>
  );
}
