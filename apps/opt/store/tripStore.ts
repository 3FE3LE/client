import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// store/tripStore.ts
import { Trip } from '@opt/core/interfaces';

interface TripState {
  trip: Trip;
  tripType: string | null;
  priority: string | null;
  tripTitle: string;
  step: number;
}
interface TripActions {
  setTrip: (id: Trip) => void;
  setTripType: (type: string) => void;
  setPriority: (priority: string) => void;
  setTripTitle: (title: string) => void;
  setStep: (step: number) => void;
  reset: () => void;
}

const initialState: TripState = {
  trip: {
    id: '',
    title: '',
    description: '',
    userId: '',
    tripType: '',
    priority: '',
  },
  tripType: null,
  priority: null,
  tripTitle: '',
  step: 0,
};

export const useTripStore = create<TripState & TripActions>()(
  persist(
    (set) => ({
      ...initialState,
      setTrip: (trip) => set({ trip: trip }),
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
