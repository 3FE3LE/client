import { Session } from 'next-auth';
import { redirect } from 'next/navigation';

import { auth } from '@sss/auth';

const getSessionOnServer = async (): Promise<Session | null> => {
  return await auth();
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
