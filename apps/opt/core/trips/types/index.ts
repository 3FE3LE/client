export type TripType = {
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
  destinations?: Destination[];
  activities?: Activity[];
};

export type Budget = {
  amount: number;
  max: number;
  min: number;
  currency: Currency;
};

export type Currency = {
  id: number;
  name: string;
  symbol: string;
};

export type Destination = {
  name: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
};

export type Activity = {
  name: string;
  description: string;
  priority: ActivityPriority;
};

enum ActivityPriority {
  Low,
  Medium,
  Hight,
}
