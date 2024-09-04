import { ActionButton } from '@repo/ui';

export const TripBudget = ({ budget }: { budget: any }) => {
  return (
    <>
      <p>Budget:</p>
      {budget ? (
        budget.amount
      ) : (
        <ActionButton variant="primary" size="small">
          Add Budget
        </ActionButton>
      )}
    </>
  );
};
