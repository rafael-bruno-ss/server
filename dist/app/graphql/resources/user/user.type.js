"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.userType = new graphql_1.GraphQLObjectType({
    name: 'user',
    fields: () => ({
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        password: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        }
    })
});
