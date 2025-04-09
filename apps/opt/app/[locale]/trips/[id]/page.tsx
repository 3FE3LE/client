import { TripDetails } from '@opt/components/trips';

type IdParams = Promise<{ id: string }>;

export default async function Trip({ params }: { params: IdParams }) {
  const { id } = await params;
  return <TripDetails id={id} />;
}
