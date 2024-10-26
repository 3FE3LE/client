import { UUID } from 'node:crypto';

import { Trip } from './TripInterface';
import { Member } from './UserInterface';

export interface TripGroup {
  readonly id: UUID;
  name: string;
  description: string;
  readonly createdAt: Date;
  members: Member[];
  trips: Trip[];
}
