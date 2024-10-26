import { TripDetails } from '@opt/components/trips';

export default async function Trip({ params }: { params: any }) {
  const { id } = await params;
  return <TripDetails id={id} />;
}
