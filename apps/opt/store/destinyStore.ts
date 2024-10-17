import { create } from 'zustand';

interface DestinyState {
  destiny: google.maps.places.PlaceResult | null;
  searchInput: string;
}

interface DestinyActions {
  setSearchInput: (searchInput: string) => void;
  setDestiny: (destinies: google.maps.places.PlaceResult) => void;
  reset: () => void;
}

const initialState: DestinyState = {
  destiny: null,
  searchInput: '',
};

export const useDestinyStore = create<DestinyState & DestinyActions>()(
  (set) => ({
    ...initialState,
    setDestiny: (destiny) => set({ destiny: destiny }),
    setSearchInput: (searchInput) => set({ searchInput: searchInput }),
    reset: () => set({ ...initialState }),
  }),
);
