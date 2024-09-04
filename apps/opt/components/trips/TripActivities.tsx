import { ActionButton } from '@repo/ui';

export const TripActivities = ({ activities }: { activities: any[] }) => {
  return (
    <div>
      <div>
        <h3>Activities</h3>
        <ActionButton variant="primary" size="small">
          <span>Add activity</span>
        </ActionButton>
      </div>
      {activities.length > 0 ? (
        activities.map((activity) => (
          <p key={activity.name} className="">
            Activity: {activity.name}
          </p>
        ))
      ) : (
        <span>No Activities, yet</span>
      )}
    </div>
  );
};
