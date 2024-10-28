import '@opt/styles/main.scss';

import { getMessages, setRequestLocale } from 'next-intl/server';

import { auth } from '@opt/auth';
import { AppWrapper, SWRProvider } from '@opt/components/UI';
import { routing } from '@opt/i18n/routing';
import { Navbar } from '@repo/ui';
import { OPT_MENU_ITEMS } from '@repo/ui/constants';

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

  const menuItems = OPT_MENU_ITEMS;

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
