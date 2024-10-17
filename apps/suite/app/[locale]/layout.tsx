import '@sss/styles/main.scss';

import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import ss_logo from '@repo/ui/assets/logo-17suit@4x.png';
import { PageProps } from '@repo/ui/types';
import {
  AppWrapper,
  Footer,
  Navbar,
  Sidebar,
  SWRProvider,
} from '@sss/components';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { auth } from '../../auth';
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

  const authenticated = !!session;

  const menuItems = [
    {
      name: 'login',
      href: '/login',
      protected: false,
    },
    {
      name: 'register',
      href: '/register',
      protected: false,
    },
    {
      name: 'dashboard',
      href: '/dashboard',
      protected: true,
    },
    {
      name: 'profile',
      href: '/profile',
      protected: true,
    },
  ];
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <AppWrapper messages={messages} locale={locale}>
          <SWRProvider>
            <main className="layout">
              <Navbar
                locale={locale}
                authenticated={authenticated}
                menuItems={menuItems}
                title={{ src: ss_logo.src, alt: '17Suit Logo' }}
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
