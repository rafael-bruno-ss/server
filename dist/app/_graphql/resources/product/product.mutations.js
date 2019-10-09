"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createProduct_1 = require("./mutations/createProduct");
const updateProduct_1 = require("./mutations/updateProduct");
const deleteProduct_1 = require("./mutations/deleteProduct");
exports.productMutations = {
    createProduct: createProduct_1.createProduct,
    deleteProduct: deleteProduct_1.deleteProduct,
    updateProduct: updateProduct_1.updateProduct
};
