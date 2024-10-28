import { Session } from 'next-auth';

import { auth } from '@sss/auth';
import { redirect, routing } from '@sss/i18n/routing';

const getSessionOnServer = async (): Promise<Session | null> => {
  return await auth();
};

export default async function ProfilePage() {
  const session = await getSessionOnServer();
  if (!session) {
    redirect({ href: '/login', locale: routing.defaultLocale });
  }

  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}
