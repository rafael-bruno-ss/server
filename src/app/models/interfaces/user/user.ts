import { Document, Model } from 'mongoose';
import { BaseModel } from '../baseModel';

export interface User extends BaseModel, Document {
  id: number;
  name: string;
  password: string;
}

export interface UserDBModel extends BaseModel, Model<User> { }
