"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const product_inputs_1 = require("../product.inputs");
const product_type_1 = require("../product.type");
const utils_1 = require("../../../../utils/utils");
exports.createProduct = {
    type: product_type_1.productType,
    args: {
        input: { type: new graphql_1.GraphQLNonNull(product_inputs_1.createProductInput) }
    },
    resolve: (parent, args, context, info) => {
        return context.db.mongoose.models.Product
            .insertMany([args.input])
            .then(products => products[0])
            .catch(utils_1.handleError);
    }
};
