"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const product_inputs_1 = require("../product.inputs");
const utils_1 = require("../../../../utils/utils");
exports.deleteProduct = {
    type: graphql_1.GraphQLBoolean,
    args: {
        input: { type: new graphql_1.GraphQLNonNull(product_inputs_1.deleteProductInput) },
    },
    resolve: (parent, args, context, info) => {
        return context.db.mongoose.models.Product
            .deleteOne({ id: args.input.id })
            .then(() => true)
            .catch(utils_1.handleError);
    }
};
