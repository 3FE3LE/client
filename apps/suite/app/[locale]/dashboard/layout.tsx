import { PageProps } from '@repo/ui/types';
import { MainLayout } from '@sss/components';

export default function Layout({ children, params }: PageProps) {
  return <MainLayout params={params}>{children}</MainLayout>;
}
