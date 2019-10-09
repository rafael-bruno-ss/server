import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql';

export const productType = new GraphQLObjectType({
  name: 'product',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    code: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
});
