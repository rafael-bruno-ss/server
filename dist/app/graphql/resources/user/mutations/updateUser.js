"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_inputs_1 = require("../user.inputs");
const user_type_1 = require("../user.type");
const utils_1 = require("../../../../utils/utils");
exports.updateUser = {
    type: user_type_1.userType,
    args: {
        input: { type: new graphql_1.GraphQLNonNull(user_inputs_1.updateUserInput) },
    },
    resolve: (parent, args, context, info) => {
        context.db.mongoose.models.User
            .findOne({ name: args.input.name })
            .then(user => {
            if (!user.isPassword(user.password, args.input.password)) {
                user.password = user.encryptPassword(args.input.password);
            }
            return context.db.mongoose.models.User
                .updateOne({ id: args.input.id }, { $set: user })
                .then(() => args.input)
                .catch(utils_1.handleError);
        })
            .catch(utils_1.handleError);
    }
};
