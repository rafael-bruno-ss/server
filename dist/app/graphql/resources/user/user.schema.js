"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_queries_1 = require("./user.queries");
const user_mutations_1 = require("./user.mutations");
exports.userSchema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: 'Queries',
        fields: () => (Object.assign({}, user_queries_1.userQueries))
    }),
    mutation: new graphql_1.GraphQLObjectType({
        name: 'Mutations',
        fields: () => (Object.assign({}, user_mutations_1.userMutations))
    })
});
