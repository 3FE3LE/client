import { TripType } from './types';

export interface TripRepository {
  getAllTrips(): Promise<TripType[]>;
  getTripById(id: string): Promise<TripType | null>;
  createTrip(trip: TripType, token: string): Promise<void>;
  updateTrip(id: string, trip: TripType, token: string): Promise<void>;
  deleteTrip(id: string, token: string): Promise<void>;
}
