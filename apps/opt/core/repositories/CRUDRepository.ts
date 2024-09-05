export interface CRUDRepository<T, ID> {
  getAll(): Promise<T[]>;
  getById(id: ID): Promise<T | null>;
  create(entity: T, token: string): Promise<void>;
  update(id: ID, entity: T, token: string): Promise<void>;
  delete(id: ID, token: string): Promise<void>;
}
