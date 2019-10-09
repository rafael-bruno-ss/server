import { GraphQLNonNull, GraphQLBoolean, GraphQLResolveInfo } from 'graphql';
import { ResolverContext } from '../../../../models/interfaces/resolverContext';
import { deleteUserInput } from '../user.inputs';
import { handleError } from '../../../../utils/utils';

export const deleteUser = {
  type: GraphQLBoolean,
  args: {
    input: { type: new GraphQLNonNull(deleteUserInput) },
  },
  resolve: (parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
    return context.db.mongoose.models.User
      .deleteOne({ id: args.input.id })
      .then(() => true)
      .catch(handleError);
  }
};
