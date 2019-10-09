import { GraphQLObjectType } from 'graphql';
import { productQueries } from './resources/product/product.queries';
import { userQueries } from './resources/user/user.queries';

export const queries = new GraphQLObjectType({
  name: 'Queries',
  fields: () => ({
    ...productQueries,
    ...userQueries
  })
});
