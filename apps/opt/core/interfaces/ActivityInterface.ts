export interface Activity {
  readonly id: number;
  name: string;
  description: string;
  readonly createdAt: Date;
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
