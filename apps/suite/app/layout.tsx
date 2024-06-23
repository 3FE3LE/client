import { Metadata } from 'next';
import { Navbar } from './components/Navbar';

import '@repo/ui/styles/main.scss';
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
      <body>{children}</body>
    </html>
  );
}
