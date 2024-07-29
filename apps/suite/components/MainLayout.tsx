'use client';
import { SessionProvider } from 'next-auth/react';

import { PageProps } from '@repo/ui/types';

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const MainLayout = ({ children, params: { locale } }: PageProps) => {
  return (
    <SessionProvider>
      <div className="layout">
        <Navbar locale={locale} />
        <div className="layout__content">
          <Sidebar />
          {children}
        </div>
        <Footer locale={locale} />
      </div>
    </SessionProvider>
  );
};
