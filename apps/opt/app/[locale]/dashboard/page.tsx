import { DashboardContent } from '@opt/components/dashboard';
import { TripsProvider } from '@opt/components/providers/TripsProvider';

export default function Dashboard() {
  return (
    <TripsProvider>
      <div className="dashboard">
        <DashboardContent />
      </div>
    </TripsProvider>
  );
}
