import '@repo/ui/styles/main.scss';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { AppWrapper, Footer } from '@/components';

import { metadata } from '../metadata';

const languages = ['en', 'es'];

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AppWrapper>{children}</AppWrapper>
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export { metadata };
