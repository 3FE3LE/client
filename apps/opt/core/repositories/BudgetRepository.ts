import { Budget } from '../interfaces';
import { Currency } from '../interfaces/BudgetInterface';
import { CRUDRepository } from './CRUDRepository';

export interface BudgetRepository extends CRUDRepository<Budget, number> {
  getCurrencies(): Promise<Currency[]>;
}
