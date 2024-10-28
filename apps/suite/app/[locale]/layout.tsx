import '@sss/styles/main.scss';

import { getMessages, setRequestLocale } from 'next-intl/server';

import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import { SSS_MENU_ITEMS } from '@repo/ui/constants';
import {
  AppWrapper,
  Footer,
  Navbar,
  Sidebar,
  SWRProvider,
} from '@sss/components';
import { routing } from '@sss/i18n/routing';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { auth } from '../../auth';
import { metadata } from '../metadata';

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: 'es' | 'en' };
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const session = await auth();

  const messages = await getMessages();

  const authenticated = !!session;

  const menuItems = SSS_MENU_ITEMS;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <AppWrapper messages={messages} locale={locale}>
          <SWRProvider>
            <main className="layout">
              <Navbar
                title={{ src: ss_logo.src, alt: '17Suit Logo' }}
                {...{ authenticated, menuItems, locale }}
              />
              <div className="layout__content">
                {session && <Sidebar />}
                <section className="layout__section">{children}</section>
              </div>
              <Footer locale={locale} />
            </main>
          </SWRProvider>
        </AppWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}

export { metadata };
