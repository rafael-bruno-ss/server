import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { productQueries } from './product.queries';
import { productMutations } from './product.mutations';

export const productSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: () => ({
      ...productQueries
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    fields: () => ({
      ...productMutations
    })
  })
});
