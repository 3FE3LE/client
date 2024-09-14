import { Card } from '@repo/ui';
import { OPT_URI } from '@repo/ui/constants';
import { auth } from '@sss/auth';
import { Link, redirect } from '@sss/navigations';

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
        <Link href={OPT_URI + '/dashboard'} className="card__button">
          Launch app
        </Link>
      </Card>
    </div>
  );
}
