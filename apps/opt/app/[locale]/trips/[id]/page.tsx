import { TripDetails } from '@opt/components/trips';

export default function Trip({ params }: { params: { id: string } }) {
  return <TripDetails id={params.id} />;
}
