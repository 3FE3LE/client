'use client';
import { XIcon } from 'lucide-react';
import { useState } from 'react';

import { useBudgetStore } from '@opt/store';
import { ActionButton, FormWrapper, InputField, Modal } from '@repo/ui';

const AddBudgetModal = ({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}) => {
  const { amount, min, max, setAmount, setMin, setMax } = useBudgetStore();

  return (
    <Modal open={open} onClose={onClose} onSubmit={onSubmit}>
      <div>
        <FormWrapper title="Add Budget" loading={false}>
          <InputField
            name="amount"
            value={amount}
            placeholder="Amount"
            handleChange={setAmount}
          />
          <InputField
            name="min"
            value={min}
            placeholder="Min"
            handleChange={setMin}
          />
          <InputField
            name="max"
            value={max}
            placeholder="Max"
            handleChange={setMax}
          />
        </FormWrapper>
        <ActionButton onClick={() => {}}>Save</ActionButton>
      </div>
      <ActionButton onClick={() => {}}>Cancel</ActionButton>
      <ActionButton
        type="icon"
        onClick={() => {}}
        variant="secondary"
        size="small"
      >
        <XIcon />
      </ActionButton>
    </Modal>
  );
};

export const TripBudget = ({ budget }: { budget: any }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <p>Budget:</p>
      {budget ? (
        budget.amount
      ) : (
        <ActionButton
          onClick={() => setOpen(true)}
          variant="primary"
          size="small"
        >
          Add Budget
        </ActionButton>
      )}
      <AddBudgetModal
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => {}}
      />
    </>
  );
};
