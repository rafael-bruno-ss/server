"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const product_type_1 = require("../product.type");
const utils_1 = require("../../../../utils/utils");
exports.products = {
    type: new graphql_1.GraphQLList(product_type_1.productType),
    args: {
        first: { type: graphql_1.GraphQLInt },
        offset: { type: graphql_1.GraphQLInt }
    },
    resolve: (parent, args, context, info) => {
        return context.db.mongoose.models.Product.find().catch(utils_1.handleError);
    }
}; // falta implementar a paginação
