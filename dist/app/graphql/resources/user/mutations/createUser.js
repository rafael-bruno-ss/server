"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const user_inputs_1 = require("../user.inputs");
const user_type_1 = require("../user.type");
const user_1 = require("../../../../models/user");
const utils_1 = require("../../../../utils/utils");
exports.createUser = {
    type: user_type_1.userType,
    args: {
        input: { type: new graphql_1.GraphQLNonNull(user_inputs_1.createUserInput) },
    },
    resolve: (parent, args, context, info) => {
        const user = new user_1.UserModel(args.input);
        return user
            .save()
            .then(newUser => newUser)
            .catch(utils_1.handleError);
    }
};
