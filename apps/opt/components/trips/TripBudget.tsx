'use client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { Budget } from '@opt/core/interfaces';
import { BudgetActions, TripActions } from '@opt/integration/actions';
import { TripAdapter } from '@opt/integration/adapters';
import { createTripsHooks } from '@opt/integration/hooks';
import { useBudgetStore, useTripStore } from '@opt/store';
import { ActionButton } from '@repo/ui';

import { AddBudgetModal } from './AddBudgetModal';

export const TripBudget = ({ budget }: { budget: any }) => {
  const [open, setOpen] = useState(false);

  const { amount, max, min, currencyId, reset } = useBudgetStore();
  const { trip } = useTripStore();
  const { useAction } = createTripsHooks(TripAdapter);

  const session = useSession();

  const handleSubmit = async () => {
    const newBudget: Budget = {
      amount: Number(amount),
      currencyId: Number(currencyId),
      min: Number(min),
      max: Number(max),
      userId: session.data?.user?.id,
    };

    const { createBudget } = BudgetActions;
    const { updateTrip } = TripActions;

    const result = await createBudget(newBudget);
    if (result.error) {
      toast.error(result.error);
      return;
    }
    const resultTrip = await useAction(updateTrip, [
      trip?.id!,
      {
        title: trip?.title,
        description: trip?.description,
        priority: trip?.priority,
        userId: trip.userId,
        tripType: trip?.tripType,
        budgetId: result.data?.id,
      },
    ]);
    console.log(resultTrip);
    if (result.error) {
      toast.error(result.error);
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
