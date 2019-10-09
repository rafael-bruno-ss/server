import { Document, Model } from 'mongoose';
import { BaseModel } from '../baseModel';

export interface Product extends BaseModel, Document {
  id: number;
  name: string;
  code: string;
}

export interface ProductDBModel extends BaseModel, Model<Product> { }
