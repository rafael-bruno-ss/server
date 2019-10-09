import { GraphQLNonNull, GraphQLResolveInfo } from 'graphql';
import { updateProductInput } from '../product.inputs';
import { productType } from '../product.type';
import { ResolverContext } from '../../../../models/interfaces/resolverContext';
import { handleError } from '../../../../utils/utils';

export const updateProduct = {
  type: productType,
  args: {
    input: { type: new GraphQLNonNull(updateProductInput) },
  },
  resolve: (parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
    return context.db.mongoose.models.Product
      .updateOne({ id: args.input.id }, { $set: args.input })
      .then(() => args.input)
      .catch(handleError);
  }
};
