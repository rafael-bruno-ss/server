import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';

export const createProductInput = new GraphQLInputObjectType({
  name: 'createProductInput',
  description: '',
  fields: () => ({
    name: { type: new GraphQLNonNull(GraphQLString) },
    code: { type: GraphQLString }
  })
});

export const updateProductInput = new GraphQLInputObjectType({
  name: 'updateProductInput',
  description: '',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    code: { type: GraphQLString }
  })
});

export const deleteProductInput = new GraphQLInputObjectType({
  name: 'deleteProductInput',
  description: '',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) }
  })
});
