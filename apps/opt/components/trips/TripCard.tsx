import { TripType } from '@opt/core/trips/types';
import { Link } from '@opt/navigations';
import { ActionButton, Card } from '@repo/ui';

export const TripCard = ({
  id,
  title,
  description,
  startDate,
  endDate,
}: TripType) => {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link href={`/trips/${id}`}>
        <ActionButton>Details</ActionButton>
      </Link>
    </Card>
  );
};
