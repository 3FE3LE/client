import { redirect } from 'next/navigation';

import { Card } from '@repo/ui';
import { auth } from '@sss/auth';
import { Link } from '@sss/navigations';

export default async function DashboardPage() {
  const session = await auth();
  if (!session) {
    redirect('/login');
  }

  return (
    <div className="dashboard__container">
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.email}</p>
      <Card>
        <h3 className="card__header">One Plan trip</h3>
        <p className="card__body">Plan your next adventure with ease</p>
        <Link href={'http://localhost:3002'} className="card__button">
          Launch app
        </Link>
      </Card>
    </div>
  );
}
