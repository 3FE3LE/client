import { Trip } from '@opt/core/interfaces';
import { Link } from '@opt/navigations';
import { ActionButton, Card } from '@repo/ui';

export const TripCard = ({
  id,
  title,
  description,
  startDate,
  endDate,
}: Trip) => {
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
