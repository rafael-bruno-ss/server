import * as jwt from 'jsonwebtoken';
import { GraphQLFieldResolver } from 'graphql';
import { ComposableResolver } from './composable.resolver';
import { ResolverContext } from '../../models/interfaces/resolverContext';
import { JWT_SECRET } from '../../utils/constants';

export const verifyTokenResolver: ComposableResolver<any, ResolverContext> =
  (resolver: GraphQLFieldResolver<any, ResolverContext>): GraphQLFieldResolver<any, ResolverContext> => {

    return (parent, args, context: ResolverContext, info) => {
      const token: string = context.authorization.split(' ')[1];
      return jwt.verify(token, JWT_SECRET, (err, decoded: any) => {
        if (!err) {
          return resolver(parent, args, context, info);
        }
        throw new Error(`${err.name}: ${err.message}`);
      });
    };
  };
