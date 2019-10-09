import { Mongoose } from 'mongoose';
import { Models } from './models';

export interface DbConnection extends Models {
  mongoose: Mongoose;
}
