"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.createProductInput = new graphql_1.GraphQLInputObjectType({
    name: 'createProductInput',
    description: '',
    fields: () => ({
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        code: { type: graphql_1.GraphQLString }
    })
});
exports.updateProductInput = new graphql_1.GraphQLInputObjectType({
    name: 'updateProductInput',
    description: '',
    fields: () => ({
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
        name: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        code: { type: graphql_1.GraphQLString }
    })
});
exports.deleteProductInput = new graphql_1.GraphQLInputObjectType({
    name: 'deleteProductInput',
    description: '',
    fields: () => ({
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) }
    })
});
