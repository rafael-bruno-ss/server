import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { userQueries } from './user.queries';
import { userMutations } from './user.mutations';

export const userSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: () => ({
      ...userQueries
    })
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    fields: () => ({
      ...userMutations
    })
  })
});
