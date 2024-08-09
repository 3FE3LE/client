import '@sss/styles/main.scss';

import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import { PageProps } from '@repo/ui/types';
import { auth } from '@sss/auth';
import { AppWrapper, Footer, Navbar, Sidebar } from '@sss/components';
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
  const session = await auth();

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <AppWrapper messages={messages} locale={locale}>
          <main className="layout">
            <Navbar locale={locale} authenticated={!!session} />
            <div className="layout__content">
              {session && <Sidebar />}
              <section className="layout__section">{children}</section>
            </div>
            <Footer locale={locale} />
          </main>
        </AppWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}

export { metadata };
