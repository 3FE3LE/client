'use client';

import { createContext, useContext } from 'react';

import { TripAdapter } from '@opt/integration/adapters';
import { createTripsHooks } from '@opt/integration/hooks';

const { useTrips } = createTripsHooks(TripAdapter);

const TripsContext = createContext<
  { trips: any[]; isLoading: boolean; isError: boolean } | undefined
>(undefined);

export const TripsProvider = ({ children }: { children: React.ReactNode }) => {
  const { results: trips, isLoading, isError } = useTrips();

  return (
    <TripsContext.Provider value={{ trips: trips || [], isLoading, isError }}>
      {children}
    </TripsContext.Provider>
  );
};

export const useTripsContext = () => {
  const context = useContext(TripsContext);
  if (!context) {
    throw new Error('useTripsContext must be used within a TripsProvider');
  }
  return context;
};
