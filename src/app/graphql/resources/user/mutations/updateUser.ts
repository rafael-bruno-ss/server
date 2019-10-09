import { GraphQLNonNull, GraphQLResolveInfo } from 'graphql';
import { updateUserInput } from '../user.inputs';
import { userType } from '../user.type';
import { ResolverContext } from '../../../../models/interfaces/resolverContext';
import { handleError } from '../../../../utils/utils';

export const updateUser = {
  type: userType,
  args: {
    input: { type: new GraphQLNonNull(updateUserInput) },
  },
  resolve: (parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
    context.db.mongoose.models.User
      .findOne({ name: args.input.name })
      .then(user => {
        if (!user.isPassword(user.password, args.input.password)) {
          user.password = user.encryptPassword(args.input.password);
        }
        return context.db.mongoose.models.User
          .updateOne({ id: args.input.id }, { $set: user })
          .then(() => args.input)
          .catch(handleError);
      })
      .catch(handleError);
  }
};
