"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const db_1 = require("./../db/db");
const constants_1 = require("../utils/constants");
exports.extractJwtMiddleware = () => {
    return (req, res, next) => {
        const authorization = req.get('authorization');
        const token = authorization ? authorization.split(' ')[1] : undefined;
        req['context'] = {};
        req['context']['authorization'] = authorization;
        if (!token) {
            return next();
        }
        jwt.verify(token, constants_1.JWT_SECRET, (err, decoded) => {
            if (err) {
                return next();
            }
            db_1.default.User.findOne({
                id: decoded.sub
            })
                .then(user => {
                if (user) {
                    req['context']['authUser'] = {
                        id: user.id,
                        name: user.name
                    };
                }
                return next();
            });
        });
    };
};
