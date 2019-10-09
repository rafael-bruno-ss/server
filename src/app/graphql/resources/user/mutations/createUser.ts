import { GraphQLNonNull, GraphQLResolveInfo } from 'graphql';
import { createUserInput } from '../user.inputs';
import { userType } from '../user.type';
import { ResolverContext } from '../../../../models/interfaces/resolverContext';
import { UserModel } from '../../../../models/user';
import { handleError } from '../../../../utils/utils';

export const createUser = {
  type: userType,
  args: {
    input: { type: new GraphQLNonNull(createUserInput) },
  },
  resolve: (parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
    const user = new UserModel(args.input);
    return user
      .save()
      .then(newUser => newUser)
      .catch(handleError);
  }
};
