import { DbConnection } from './dbConnection';
import { DataLoaders } from './dataLoader/dataLoaders';
import { RequestedFields } from '../../graphql/ast/requestedFields';

export interface ResolverContext {
  db?: DbConnection;
  authorization?: string;
  dataloaders?: DataLoaders;
  requestedFields?: RequestedFields;
}
