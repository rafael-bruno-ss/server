"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_inputs_1 = require("../user.inputs");
const utils_1 = require("../../../../utils/utils");
exports.deleteUser = {
    type: graphql_1.GraphQLBoolean,
    args: {
        input: { type: new graphql_1.GraphQLNonNull(user_inputs_1.deleteUserInput) },
    },
    resolve: (parent, args, context, info) => {
        return context.db.mongoose.models.User
            .deleteOne({ id: args.input.id })
            .then(() => true)
            .catch(utils_1.handleError);
    }
};
