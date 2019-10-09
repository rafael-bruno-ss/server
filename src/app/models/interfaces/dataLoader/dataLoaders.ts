import * as DataLoader from 'dataloader';

import { User } from '../user/user';
import { DataLoaderParam } from './dataLoaderParam';

export interface DataLoaders {
  userLoader: DataLoader<DataLoaderParam<number>, User>;
}
