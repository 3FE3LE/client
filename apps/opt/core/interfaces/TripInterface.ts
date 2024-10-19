import { Activity } from './ActivityInterface';
import { Budget } from './BudgetInterface';
import { Destiny } from './DestinyInterface';
import { TripGroup } from './TripGroupInterface';
import { Member } from './UserInterface';

export interface Trip {
  id?: string;
  title: string;
  description: string;
  createdAt?: Date;
  userId: string;
  startDate?: Date;
  endDate?: Date;
  budgetId?: number;
  tripGroupId?: string;
  status?: TripStatus;
  tripType: string;
  priority: string;
  budget?: Budget;
  shareableLink?: string;
  qrCode?: string;
  members?: Partial<Member>[];
  destinies?: Partial<Destiny>[];
  activities?: Partial<Activity>[];
  tripGroup?: Partial<TripGroup>;
}

export enum TripStatus {
  DRAFT = 'DRAFT',
  PLANNING = 'PLANNING',
  BOOKED = 'BOOKED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  ON_HOLD = 'ON_HOLD',
}
