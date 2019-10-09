"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const constants_1 = require("../../utils/constants");
exports.verifyTokenResolver = (resolver) => {
    return (parent, args, context, info) => {
        const token = context.authorization.split(' ')[1];
        return jwt.verify(token, constants_1.JWT_SECRET, (err, decoded) => {
            if (!err) {
                return resolver(parent, args, context, info);
            }
            throw new Error(`${err.name}: ${err.message}`);
        });
    };
};
