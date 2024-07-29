import '@sss/styles/main.scss';

import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import { AppWrapper } from '@repo/ui';
import { PageProps } from '@repo/ui/types';
import { MainLayout } from '@sss/components';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { metadata } from '../metadata';

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
        <AppWrapper messages={messages} locale={locale}>
          <MainLayout params={{ locale }}>{children}</MainLayout>
        </AppWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}

export { metadata };
