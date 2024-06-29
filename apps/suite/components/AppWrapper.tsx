'use client';

import { SessionProvider } from 'next-auth/react';

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
