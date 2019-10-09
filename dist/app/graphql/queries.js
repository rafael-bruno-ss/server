"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const product_queries_1 = require("./resources/product/product.queries");
const user_queries_1 = require("./resources/user/user.queries");
exports.queries = new graphql_1.GraphQLObjectType({
    name: 'Queries',
    fields: () => (Object.assign({}, product_queries_1.productQueries, user_queries_1.userQueries))
});
