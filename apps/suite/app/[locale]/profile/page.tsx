import { Session } from 'next-auth';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

const getSessionOnServer = async (): Promise<Session | null> => {
  return await getServerSession(authOptions);
};

export default async function ProfilePage() {
  const session = await getSessionOnServer();
  if (!session) {
    redirect('/login');
  }

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
