"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const graphql_1 = require("graphql");
const utils_1 = require("../../../../utils/utils");
const user_inputs_1 = require("../user.inputs");
const constants_1 = require("../../../../utils/constants");
const authUser_type_1 = require("../types/authUser.type");
exports.signIn = {
    type: new graphql_1.GraphQLNonNull(authUser_type_1.authUserType),
    args: {
        input: { type: new graphql_1.GraphQLNonNull(user_inputs_1.signInInput) }
    },
    resolve: (parent, args, context, info) => {
        return context.db.mongoose.models.User.findOne({
            name: args.input.name
        })
            .then(user => {
            if (!user || !user.isPassword(user.password, args.input.password)) {
                throw new Error('Unauthorized, wrong user or password');
            }
            const payload = { sub: user.id };
            return {
                id: user.id,
                name: user.name,
                groups: user.groups,
                homePage: user.homePage,
                store: user.store,
                token: jwt.sign(payload, constants_1.JWT_SECRET, {
                    expiresIn: '1h'
                })
            };
        })
            .catch(utils_1.handleError);
    }
};
