import { Metadata } from 'next';

import '@repo/ui/styles/main.scss';
import { Navbar, AppWrapper } from '../components';
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
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
