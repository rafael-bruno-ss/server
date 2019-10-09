"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const product_mutations_1 = require("./resources/product/product.mutations");
const user_mutations_1 = require("./resources/user/user.mutations");
exports.mutations = new graphql_1.GraphQLObjectType({
    name: 'Mutations',
    fields: () => (Object.assign({}, product_mutations_1.productMutations, user_mutations_1.userMutations))
});
