import { PageProps } from '@repo/ui/types';

import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const MainLayout = ({ children, params: { locale } }: PageProps) => {
  return (
    <main className="main">
      <Navbar locale={locale} />
      <div className="main__content">
        <Sidebar />
        {children}
      </div>
    </main>
  );
};
