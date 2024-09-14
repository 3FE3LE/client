export interface CRUDRepository<T, ID> {
  getAll(): Promise<T[]>;
  getById(id: ID): Promise<T | null>;
  create(entity: T, token: string): Promise<T>;
  update(id: ID, entity: T, token: string): Promise<T>;
  delete(id: ID, token: string): Promise<T>;
}
