export interface Activity {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  startTime?: Date;
  endTime?: Date;
  priority: Priority;
  tripId?: string;
  destinyId?: string;
}

enum Priority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}
