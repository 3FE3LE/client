import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { Navbar } from '../../components';
import { Session } from 'next-auth';

const getSessionOnServer = async (): Promise<Session | null> => {
  return await getServerSession(authOptions);
};

export default async function ProfilePage() {
  const session = await getSessionOnServer();
  if (!session) {
    redirect('/login');
  }

  return <div>You need to be authenticated to view this page.</div>;
}
