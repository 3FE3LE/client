import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import { Session } from 'next-auth';
import SignOutButton from './components/SignOutButton';

// Esta función se ejecutará en el servidor
const getSessionOnServer = async (): Promise<Session | null> => {
  return await getServerSession(authOptions);
};

const DashboardPage = async () => {
  const session = await getSessionOnServer();
  console.log('session:', session);
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
};

export default DashboardPage;
