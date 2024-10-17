import { Trip } from '../interfaces';
import { CRUDRepository } from './CRUDRepository';

export interface TripRepository extends CRUDRepository<Trip, string> {}
