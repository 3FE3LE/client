import '@opt/styles/main.scss';

import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import { auth } from '@opt/auth';
import { AppWrapper, SWRProvider } from '@opt/components/UI';
import { Navbar } from '@repo/ui';
import { OPT_URI, SSS_URI } from '@repo/ui/constants';
import { PageProps } from '@repo/ui/types';

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
      href: SSS_URI + '/login',
      protected: false,
    },
    {
      name: 'register',
      href: OPT_URI + '/register',
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppWrapper messages={messages} locale={locale}>
          <SWRProvider>
            <main className="layout">
              <Navbar
                title={'One Plan Trip'}
                {...{ authenticated, menuItems, locale }}
              />
              <div className="layout__content">
                <section className="layout__section">{children}</section>
              </div>
            </main>
          </SWRProvider>
        </AppWrapper>
      </body>
    </html>
  );
}

export { metadata };
