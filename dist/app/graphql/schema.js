"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const queries_1 = require("./queries");
const mutations_1 = require("./mutations");
exports.schema = new graphql_1.GraphQLSchema({
    query: queries_1.queries,
    mutation: mutations_1.mutations
});
