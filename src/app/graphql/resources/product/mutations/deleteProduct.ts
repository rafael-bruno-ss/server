import { GraphQLNonNull, GraphQLResolveInfo, GraphQLBoolean } from 'graphql';
import { deleteProductInput } from '../product.inputs';
import { ResolverContext } from '../../../../models/interfaces/resolverContext';
import { handleError } from '../../../../utils/utils';

export const deleteProduct = {
  type: GraphQLBoolean,
  args: {
    input: { type: new GraphQLNonNull(deleteProductInput) },
  },
  resolve: (parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
    return context.db.mongoose.models.Product
      .deleteOne({ id: args.input.id })
      .then(() => true)
      .catch(handleError);
  }
};
