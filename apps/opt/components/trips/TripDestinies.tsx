import { ActionButton } from '@repo/ui';

export const TripDestinies = ({ destinations }: { destinations: any[] }) => {
  return (
    <div>
      <div>
        <h3>Destinies</h3>
        <ActionButton variant="primary" size="small">
          <span>Add destiny</span>
        </ActionButton>
      </div>
      {destinations && destinations.length! > 0 ? (
        destinations.map((destination) => (
          <p key={destination.address} className="">
            Destiny: {destination.name}
          </p>
        ))
      ) : (
        <span>No destinies, yet</span>
      )}
    </div>
  );
};
