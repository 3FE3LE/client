import '@repo/ui/styles/main.scss';
import { AppWrapper } from '../../components';
import { metadata } from './metadata';
import { dir } from 'i18next';

const languages = ['en', 'es'];

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}
export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}

export { metadata };
