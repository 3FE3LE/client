import '@web/styles/main.scss';

import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import { PageProps } from '@repo/ui/types';
import { AppWrapper } from '@web/components';

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppWrapper messages={messages} locale={locale}>
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
