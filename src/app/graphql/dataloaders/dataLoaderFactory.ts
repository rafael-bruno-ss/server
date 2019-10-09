import { DbConnection } from '../../models/interfaces/dbConnection';
import { RequestedFields } from '../ast/requestedFields';

export class DataLoaderFactory {
  constructor(
    private db: DbConnection,
    private requestedFields: RequestedFields
  ) {}
}
