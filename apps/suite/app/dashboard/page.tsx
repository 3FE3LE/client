import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { Session } from 'next-auth';
import { Navbar, SignOutButton } from '../../components';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
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
