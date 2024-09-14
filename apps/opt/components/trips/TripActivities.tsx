import { Activity } from '@opt/core/interfaces';
import { ActionButton } from '@repo/ui';

export const TripActivities = ({ activities }: { activities: Activity[] }) => {
  if (!activities) {
    return <span>No Activities, yet</span>;
  }
  return (
    <div>
      <div>
        <h3>Activities</h3>
        <ActionButton variant="primary" size="small">
          <span>Add activity</span>
        </ActionButton>
      </div>
      {activities.map((activity) => (
        <p key={activity.name} className="">
          Activity: {activity.name}
        </p>
      ))}
    </div>
  );
};
