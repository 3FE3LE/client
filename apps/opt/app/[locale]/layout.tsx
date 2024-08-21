import '@opt/styles/main.scss';

import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import { AppWrapper, SWRProvider } from '@opt/components/UI';
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
  const messages = await getMessages();
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppWrapper messages={messages} locale={locale}>
          <SWRProvider>
            <main className="layout">
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
