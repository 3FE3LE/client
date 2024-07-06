import { PageProps } from '@/app/types';
import { Navbar } from '@/components';

export default function Layout({ children, params: { locale } }: PageProps) {
  return (
    <div>
      <Navbar locale={locale} />
      {children}
    </div>
  );
}
