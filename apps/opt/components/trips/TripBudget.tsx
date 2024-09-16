'use client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { Budget } from '@opt/core/interfaces';
import { TripActions } from '@opt/integration/actions';
import { createGlobalHooks } from '@opt/integration/hooks';
import { useBudgetStore, useTripStore } from '@opt/store';
import { ActionButton } from '@repo/ui';

import { AddBudgetModal } from './AddBudgetModal';

export const TripBudget = ({ budget }: { budget: any }) => {
  const [open, setOpen] = useState(false);

  const { amount, max, min, currencyId, reset } = useBudgetStore();
  const { trip } = useTripStore();
  const { useAction } = createGlobalHooks('/trips');

  const session = useSession();

  const handleSubmit = async () => {
    const newBudget: Budget = {
      amount: Number(amount),
      currencyId: Number(currencyId),
      min: Number(min),
      max: Number(max),
      userId: session.data?.user?.id,
    };
    const { updateTrip } = TripActions;

    const {
      data: result,
      isError,
      isLoading,
    } = await useAction(updateTrip, [
      trip?.id!,
      {
        ...trip,
        budget: newBudget,
      },
    ]);
    if (isError) {
      toast.error(isError);
      return;
    }
    reset();
    setOpen(false);
    toast.success('Budget created successfully');
  };

  return budget ? (
    <p>Budget:{budget.amount}</p>
  ) : !open ? (
    <ActionButton onClick={() => setOpen(true)} variant="primary" size="small">
      Add Budget
    </ActionButton>
  ) : (
    <AddBudgetModal
      open={open}
      onClose={() => setOpen(false)}
      onSubmit={handleSubmit}
    />
  );
};
