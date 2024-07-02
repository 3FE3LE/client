'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Toaster />
      {children}
    </SessionProvider>
  );
};
