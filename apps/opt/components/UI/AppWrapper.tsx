import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

export type AppWrapperProps = {
  children: React.ReactNode;
  messages: any;
  locale: string;
};

const timeZone = 'America/Bogota';

export const AppWrapper = ({ children, messages, locale }: AppWrapperProps) => {
  return (
    <SessionProvider>
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
          {children}
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </NextIntlClientProvider>
    </SessionProvider>
  );
};
