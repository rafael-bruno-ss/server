"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createUser_1 = require("./mutations/createUser");
const updateUser_1 = require("./mutations/updateUser");
const deleteUser_1 = require("./mutations/deleteUser");
const signIn_1 = require("./mutations/signIn");
exports.userMutations = {
    createUser: createUser_1.createUser,
    deleteUser: deleteUser_1.deleteUser,
    updateUser: updateUser_1.updateUser,
    signIn: signIn_1.signIn
};
