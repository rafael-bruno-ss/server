import { GraphQLList, GraphQLInt, GraphQLResolveInfo } from 'graphql';
import { productType } from '../product.type';
import { ResolverContext } from '../../../../models/interfaces/resolverContext';
import { handleError } from '../../../../utils/utils';

export const products = {
  type: new GraphQLList(productType),
  args: {
    first: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  resolve: (parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
    return context.db.mongoose.models.Product.find().catch(handleError);
  }
}; // falta implementar a paginação
