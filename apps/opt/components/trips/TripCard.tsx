import { Link } from '@opt/navigations';
import { Card } from '@repo/ui';

import { TripType } from '../../core/trips/types';

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
        <button>Details</button>
      </Link>
    </Card>
  );
};
