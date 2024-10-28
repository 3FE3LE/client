import { UUID } from 'crypto';

export interface Expense {
  id: number;
  name: string;
  value: number;
  isShared: boolean;
  currencyId: number;
  tripId: UUID;
  activityId: number;
  destinyId: UUID;
  createdAt: Date;
}

export interface ExpenseMember {
  id: number;
  memberId: string;
  expenseId: number;
  amount: number;
  isIncluded: boolean;
}
