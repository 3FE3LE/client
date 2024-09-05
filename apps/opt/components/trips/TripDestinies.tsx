import { ActionButton } from '@repo/ui';

export const TripDestinies = ({ destinies }: { destinies: any[] }) => {
  return (
    <div>
      <div>
        <h3>Destinies</h3>
        <ActionButton variant="primary" size="small">
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
