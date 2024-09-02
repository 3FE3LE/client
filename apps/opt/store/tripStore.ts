// store/tripStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface TripState {
  tripType: string | null;
  priority: string | null;
  tripTitle: string;
  step: number;
}
interface TripActions {
  setTripType: (type: string) => void;
  setPriority: (priority: string) => void;
  setTripTitle: (title: string) => void;
  setStep: (step: number) => void;
  reset: () => void;
}

const initialState: TripState = {
  tripType: null,
  priority: null,
  tripTitle: '',
  step: 0,
};

export const useTripStore = create<TripState & TripActions>()(
  persist(
    (set) => ({
      ...initialState,
      setTripType: (type) => set({ tripType: type }),
      setPriority: (priority) => set({ priority: priority }),
      setTripTitle: (title) => set({ tripTitle: title }),
      setStep: (step) => set({ step: step }),

      // Implementamos el reset al estado inicial
      reset: () => set({ ...initialState }),
    }),
    {
      name: 'trip-storage', // Nombre de la key en localStorage
    },
  ),
);
