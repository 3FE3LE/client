import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { SignOutButton } from '@/components';

// Esta función se ejecutará en el servidor
const getSessionOnServer = async (): Promise<Session | null> => {
  return await getServerSession(authOptions);
};

export default async function DashboardPage() {
  const session = await getSessionOnServer();
  if (!session) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.email}</p>
      <SignOutButton />
    </div>
  );
}
