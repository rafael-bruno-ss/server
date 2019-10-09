"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_type_1 = require("../user.type");
const utils_1 = require("../../../../utils/utils");
exports.users = {
    type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(user_type_1.userType))),
    args: {
        first: { type: graphql_1.GraphQLInt },
        offset: { type: graphql_1.GraphQLInt }
    },
    // resolve: compose(...authResolvers)((parent, args, context: ResolverContext, info: GraphQLResolveInfo) => {
    resolve: ((parent, args, context, info) => {
        return context.db.mongoose.models.User.find().catch(utils_1.handleError);
    })
};
