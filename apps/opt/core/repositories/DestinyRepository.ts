import { Destiny } from '../interfaces';
import { CRUDRepository } from './CRUDRepository';

export interface DestinyRepository extends CRUDRepository<Destiny, string> {}
