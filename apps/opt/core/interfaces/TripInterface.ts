import { UUID } from 'crypto';

import { Activity } from './ActivityInterface';
import { Budget } from './BudgetInterface';
import { Destiny } from './DestinyInterface';
import { Expense } from './ExpenseInterface';
import { TripGroup } from './TripGroupInterface';
import { Member } from './UserInterface';

export interface Trip {
  readonly id?: UUID;
  title: string;
  description: string;
  readonly createdAt?: Date;
  userId: string;
  startDate?: Date;
  endDate?: Date;
  budgetId?: number;
  tripGroupId?: string;
  status?: TripStatus;
  tripType: TripType;
  priority: TripPriority;
  budget?: Budget;
  shareableLink?: string;
  qrCode?: string;
  members?: Partial<Member>[];
  destinies?: Partial<Destiny>[];
  activities?: Partial<Activity>[];
  tripGroup?: Partial<TripGroup>;
  expenses?: Expense[];
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

export enum TripType {
  SOLO = 'SOLO',
  FAMILIAR = 'FAMILIAR',
  FRIENDS = 'FRIENDS',
  COUPLE = 'COUPLE',
  BUSINESS = 'BUSINESS',
  GROUP = 'GROUP',
}

export enum TripPriority {
  BUDGET = 'BUDGET',
  DESTINY = 'DESTINY',
  COMPANY = 'COMPANY',
  DATES = 'DATES',
  EXPERIENCE = 'EXPERIENCE',
}
