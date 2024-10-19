import { Trip } from './TripInterface';
import { Member } from './UserInterface';

export interface TripGroup {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  members: Member[];
  trips: Trip[];
}
