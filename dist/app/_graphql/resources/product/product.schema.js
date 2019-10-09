"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const product_queries_1 = require("./product.queries");
const product_mutations_1 = require("./product.mutations");
exports.productSchema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'Queries',
        fields: () => (Object.assign({}, product_queries_1.productQueries))
    }),
    mutation: new graphql_1.GraphQLObjectType({
        name: 'Mutations',
        fields: () => (Object.assign({}, product_mutations_1.productMutations))
    })
});
