'use client';

import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Toaster />
      {children}
    </SessionProvider>
  );
};
