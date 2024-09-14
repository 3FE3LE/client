'use client';
import { useRouter } from 'next/navigation';

import { Destiny } from '@opt/core/interfaces';
import { ActionButton } from '@repo/ui';

export const TripDestinies = ({ destinies }: { destinies: Destiny[] }) => {
  const router = useRouter();

  return (
    <div>
      <div>
        <h3>Destinies</h3>
        <ActionButton
          onClick={() => router.push('/trips/map')}
          variant="primary"
          size="small"
        >
          <span>Add destiny</span>
        </ActionButton>
      </div>
      {destinies && destinies.length! > 0 ? (
        destinies.map((destiny) => (
          <p key={destiny.address} className="">
            Destiny: {destiny.name}
          </p>
        ))
      ) : (
        <span>No destinies, yet</span>
      )}
    </div>
  );
};
