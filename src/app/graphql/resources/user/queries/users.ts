import { GraphQLList, GraphQLInt, GraphQLNonNull, GraphQLResolveInfo } from 'graphql';
import { userType } from '../user.type';
import { ResolverContext } from '../../../../models/interfaces/resolverContext';
import { handleError } from '../../../../utils/utils';
import { compose } from '../../../composable/composable.resolver';
import { authResolvers } from '../../../composable/auth.resolver';

export const users = {
  type: new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(userType))),
  args: {
    first: { type: GraphQLInt },
    offset: { type: GraphQLInt }
  },
  // resolve: compose(...authResolvers)((parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
  resolve: ((parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
    return context.db.mongoose.models.User.find().catch(handleError);
  })
};
