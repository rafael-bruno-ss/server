import { GraphQLObjectType } from 'graphql';
import { productMutations } from './resources/product/product.mutations';
import { userMutations } from './resources/user/user.mutations';

export const mutations = new GraphQLObjectType({
  name: 'Mutations',
  fields: () => ({
    ...productMutations,
    ...userMutations
  })
});
