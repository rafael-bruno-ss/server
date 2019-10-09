"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const basename = path.basename(module.filename);
let db = null;
if (!db) {
    db = {};
    fs.readdirSync(__dirname)
        .filter((file) => {
        const fileSlice = file.slice(-3);
        return (file.indexOf('.') !== 0) &&
            (file !== basename) &&
            ((fileSlice === '.js') || (fileSlice === '.ts'));
    })
        .forEach((file) => {
        const filepath = path.join(__dirname, file);
        const imported = require(filepath);
        if (typeof imported.modelName !== 'undefined') {
            db[imported.modelName] = imported;
        }
    });
    Object.keys(db).forEach((modelName) => {
        if (db[modelName].associate) {
            db[modelName].associate(db);
        }
    });
    db['mongoose'] = mongoose;
}
exports.default = db;
