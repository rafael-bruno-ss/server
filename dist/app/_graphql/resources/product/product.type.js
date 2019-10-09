"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.productType = new graphql_1.GraphQLObjectType({
    name: 'product',
    fields: () => ({
        id: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID)
        },
        name: {
            type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString)
        },
        code: {
            type: graphql_1.GraphQLString
        }
    })
});
