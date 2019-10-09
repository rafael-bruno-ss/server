// import * as jwt from 'jsonwebtoken'
// import { GraphQLNonNull, GraphQLResolveInfo } from 'graphql';
// import { ResolverContext } from '../../../../models/interfaces/resolverContext';
// import { handleError } from '../../../../utils/utils';
// import { signInInput } from '../user.inputs';
// import { UserTC } from '../user.schema';
// UserTC.addResolver({
//   name: 'signIn',
//   type: UserTC,
//   args: {
//     input: { type: new GraphQLNonNull(signInInput) }
//   },
//   resolve: async ({ source, args, context, info }) => {
//     return context.db.mongoose.models.User.findOne({
//       name: args.input.name
//     })
//     .then(user => {
//       const payload = { sub: user.id }
//       return {
//         id: user.id,
//         name: user.name,
//       };
//     })
//     .catch(handleError);
//   }
// });
