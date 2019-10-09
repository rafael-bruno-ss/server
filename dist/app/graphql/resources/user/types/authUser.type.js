"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.authUserType = new graphql_1.GraphQLObjectType({
    name: 'authUser',
    fields: () => ({
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        token: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        groups: {
            type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)))
        },
        homePage: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        store: {
            type: graphql_1.GraphQLID
        }
    })
});
