import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface BudgetState {
  amount: number;
  min: number;
  max: number;
  currencyId: number;
}

interface BudgetActions {
  setAmount: (amount: number) => void;
  setMin: (min: number) => void;
  setMax: (max: number) => void;
  setCurrencyId: (currencyId: number) => void;
  reset: () => void;
}

const initialState: BudgetState = {
  amount: 0,
  min: 0,
  max: 0,
  currencyId: 0,
};

export const useBudgetStore = create<BudgetState & BudgetActions>()(
  persist(
    (set) => ({
      ...initialState,
      setAmount: (amount) => set({ amount: amount }),
      setMin: (min) => set({ min: min }),
      setMax: (max) => set({ max: max }),
      setCurrencyId: (currencyId) => set({ currencyId: currencyId }),
      reset: () => set({ ...initialState }),
    }),
    {
      name: 'budget-storage',
    },
  ),
);
