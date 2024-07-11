import '@repo/ui/styles/main.scss';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';

import { AppWrapper, Footer } from '@/components';

import { metadata } from '../metadata';
import { PageProps } from '../types';

const languages = ['en', 'es'];

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params: { locale },
}: PageProps) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider
          enableColorScheme={true}
          defaultTheme="system"
          storageKey="theme"
          themes={['system', 'dark', 'light']}
        >
          <NextIntlClientProvider messages={messages}>
            <AppWrapper>
              {children}
              <Footer locale={locale} />
            </AppWrapper>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export { metadata };
