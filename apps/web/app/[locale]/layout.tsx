import '@web/styles/main.scss';

import { getMessages, setRequestLocale } from 'next-intl/server';

import { PageProps } from '@repo/ui/types';
import { AppWrapper } from '@web/components/UI';
import { routing } from '@web/i18n/routing';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params: { locale },
}: PageProps) {
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppWrapper messages={messages} locale={locale}>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
