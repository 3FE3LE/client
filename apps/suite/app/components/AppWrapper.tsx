'use client';

import { SessionProvider } from 'next-auth/react';

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  );
}
