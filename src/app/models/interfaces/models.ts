import { ProductDBModel } from './product/product';
import { UserDBModel } from './user/user';

export interface Models {
  Product: ProductDBModel;
  User: UserDBModel;
}
