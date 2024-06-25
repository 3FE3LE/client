import { Metadata } from 'next';

import '@repo/ui/styles/main.scss';
import { Navbar } from './components/Navbar';
import AppWrapper from './components/AppWrapper';
export const metadata: Metadata = {
  title: '17Suit',
  description: '17Suit a heaven suite apps',
  icons: {
    icon: '/favicon.ico',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <Navbar />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
