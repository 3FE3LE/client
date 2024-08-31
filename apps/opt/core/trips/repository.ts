import { TripType } from './types';

export interface TripRepository {
  getAllTrips(): Promise<TripType[]>;
  getTripById(id: string): Promise<TripType | null>;
  createTrip(trip: TripType): Promise<void>;
  updateTrip(id: string, trip: TripType): Promise<void>;
  deleteTrip(id: string): Promise<void>;
}
