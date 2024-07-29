import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Toaster } from 'react-hot-toast';

export type AppWrapperProps = {
  children: React.ReactNode;
  messages: any;
  locale: string;
};

const timeZone = 'America/Bogota';

export const AppWrapper = ({ children, messages, locale }: AppWrapperProps) => {
  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      timeZone={timeZone}
    >
      <ThemeProvider
        enableColorScheme={true}
        defaultTheme="system"
        storageKey="theme"
        themes={['system', 'dark', 'light']}
      >
        <Toaster position="bottom-center" toastOptions={{ duration: 3000 }} />
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};
