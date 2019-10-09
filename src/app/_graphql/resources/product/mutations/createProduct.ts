import { GraphQLNonNull, GraphQLResolveInfo } from 'graphql';
import { ResolverContext } from '../../../../models/interfaces/resolverContext';
import { createProductInput } from '../product.inputs';
import { productType } from '../product.type';
import { handleError } from '../../../../utils/utils';

export const createProduct = {
  type: productType,
  args: {
    input: { type: new GraphQLNonNull(createProductInput) }
  },
  resolve: (parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
    return context.db.mongoose.models.Product
      .insertMany([args.input])
      .then(products => products[0])
      .catch(handleError);
  }
};
