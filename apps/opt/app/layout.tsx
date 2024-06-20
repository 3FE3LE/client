import { Layout, Navbar } from '@repo/ui';
import '@repo/ui/styles/main.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          <Navbar />
          {children}
        </Layout>
      </body>
    </html>
  );
}
