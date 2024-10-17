// activities.repository.ts

import { Activity } from '../interfaces';
import { CRUDRepository } from './CRUDRepository';

export interface ActivityRepository extends CRUDRepository<Activity, number> {}
