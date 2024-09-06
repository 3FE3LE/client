import { Activity } from './ActivityInterface';
import { Budget } from './BudgetInterface';
import { Destiny } from './DestinyInterface';

export interface Trip {
  id?: number;
  title: string;
  description: string;
  createdAt?: Date;
  userId: string;
  startDate?: Date;
  endDate?: Date;
  budgetId?: number;
  status?: string;
  tripType: string;
  priority: string;
  budget?: Budget;
  destinies?: Destiny[];
  activities?: Activity[];
}
