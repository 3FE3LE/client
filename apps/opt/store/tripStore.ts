import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// store/tripStore.ts
import { Trip } from '@opt/core/interfaces';
import { TripPriority, TripType } from '@opt/core/interfaces/TripInterface';

interface TripState {
  trip: Trip;
  tripType: TripType | null;
  priority: TripPriority | null;
  tripTitle: string;
  step: number;
  searchTerm: string;
}
interface TripActions {
  setTrip: (id: Trip) => void;
  setTripType: (type: TripType) => void;
  setPriority: (priority: TripPriority) => void;
  setTripTitle: (title: string) => void;
  setStep: (step: number) => void;
  reset: () => void;
  setSearchTerm: (searchTerm: string) => void;
}

const initialState: TripState = {
  trip: {
    id: 't-r-i-p-s-t-id',
    title: '',
    description: '',
    userId: '',
    tripType: TripType.SOLO,
    priority: TripPriority.BUDGET,
  },
  searchTerm: '',
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
      setSearchTerm: (searchTerm) => set({ searchTerm: searchTerm }),

      // Implementamos el reset al estado inicial
      reset: () => set({ ...initialState }),
    }),
    {
      name: 'trip-storage', // Nombre de la key en localStorage
    },
  ),
);
