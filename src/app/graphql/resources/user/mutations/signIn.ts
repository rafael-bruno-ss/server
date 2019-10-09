import * as jwt from 'jsonwebtoken'
import { GraphQLNonNull, GraphQLResolveInfo } from 'graphql';
import { ResolverContext } from '../../../../models/interfaces/resolverContext';
import { handleError } from '../../../../utils/utils';
import { signInInput } from '../user.inputs';
import { JWT_SECRET } from '../../../../utils/constants';
import { authUserType } from '../types/authUser.type';

export const signIn = {
  type: new GraphQLNonNull(authUserType),
  args: {
    input: { type: new GraphQLNonNull(signInInput) }
  },
  resolve: (parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
    return context.db.mongoose.models.User.findOne({
      name: args.input.name
    })
    .then(user => {
      if (!user || !user.isPassword(user.password, args.input.password)) {
        throw new Error('Unauthorized, wrong user or password');
      }
      const payload = { sub: user.id }

      return {
        id: user.id,
        name: user.name,
        groups: user.groups,
        homePage: user.homePage,
        store: user.store,
        token: jwt.sign(payload, JWT_SECRET, {
          expiresIn: '1h'
        })
      };
    })
    .catch(handleError);
  }
};
