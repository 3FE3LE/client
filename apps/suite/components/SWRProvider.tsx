// components/SWRProvider.tsx
'use client';

import { SWRConfig } from 'swr';

import { swrConfig } from '@sss/infrastructure/swr/config';

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return <SWRConfig value={swrConfig}>{children}</SWRConfig>;
};
