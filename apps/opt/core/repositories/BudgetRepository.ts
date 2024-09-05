import { Budget } from '../interfaces';
import { CRUDRepository } from './CRUDRepository';

export interface BudgetRepository extends CRUDRepository<Budget, number> {}
