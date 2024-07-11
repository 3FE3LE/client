import { PageProps } from '@/app/types';
import { MainLayout } from '@/components';

export default function Layout({ children, params }: PageProps) {
  return <MainLayout params={params}>{children}</MainLayout>;
}
