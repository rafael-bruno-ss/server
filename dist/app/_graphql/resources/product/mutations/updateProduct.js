"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const product_inputs_1 = require("../product.inputs");
const product_type_1 = require("../product.type");
const utils_1 = require("../../../../utils/utils");
exports.updateProduct = {
    type: product_type_1.productType,
    args: {
        input: { type: new graphql_1.GraphQLNonNull(product_inputs_1.updateProductInput) },
    },
    resolve: (parent, args, context, info) => {
        return context.db.mongoose.models.Product
            .updateOne({ id: args.input.id }, { $set: args.input })
            .then(() => args.input)
            .catch(utils_1.handleError);
    }
};
