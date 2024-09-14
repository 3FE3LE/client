import { XIcon } from 'lucide-react';

import { BudgetAdapter } from '@opt/integration/adapters';
import { createBudgetHooks } from '@opt/integration/hooks';
import { useBudgetStore } from '@opt/store';
import {
  ActionButton,
  FormWrapper,
  InputField,
  Modal,
  SelectField,
} from '@repo/ui';
import { OptionType } from '@repo/ui/types';

export const AddBudgetModal = ({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
}) => {
  const {
    amount,
    min,
    max,
    currencyId,
    setAmount,
    setMin,
    setMax,
    setCurrencyId,
  } = useBudgetStore();

  const { useCurrencyList } = createBudgetHooks(BudgetAdapter);

  const { currencies } = useCurrencyList();

  const currenciesToOptions = currencies.map(
    (currency): OptionType => ({
      id: currency.id,
      value: currency.name,
      label: `${currency.symbol} ${currency.name}`,
    }),
  );
  const isValid = !Number.isNaN(currencyId);

  return (
    <Modal open={open} onClose={onClose} onSubmit={onSubmit}>
      <div>
        <FormWrapper title="Add Budget" loading={false}>
          <form>
            <InputField
              type="number"
              name="amount"
              value={amount}
              placeholder="Amount"
              handleChange={setAmount}
            />
            <InputField
              type="number"
              name="min"
              value={min}
              placeholder="Min"
              handleChange={setMin}
            />
            <InputField
              type="number"
              name="max"
              value={max}
              placeholder="Max"
              handleChange={setMax}
            />
            <SelectField
              name="currencies"
              options={currenciesToOptions}
              value={currencyId}
              handleChange={setCurrencyId}
            />
          </form>
          <div className="form__header">
            <ActionButton
              type="full"
              variant="primary"
              disabled={!isValid}
              onClick={onSubmit}
            >
              Save
            </ActionButton>
            <ActionButton
              type="icon"
              onClick={onClose}
              variant="accent"
              size="small"
            >
              <XIcon color="#eeeeee" />
            </ActionButton>
          </div>
        </FormWrapper>
      </div>
    </Modal>
  );
};
