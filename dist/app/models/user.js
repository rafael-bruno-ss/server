"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const es_1 = require("../db/es");
const mongooseElasticsearch = require('mongoose-elasticsearch-xp');
const UserSchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true,
        es_indexed: true
    },
    name: {
        type: mongoose_1.Schema.Types.String,
        unique: true,
        required: true,
        es_indexed: true
    },
    password: {
        type: mongoose_1.Schema.Types.String,
        required: true
    }
}, {
    collection: 'users'
});
UserSchema.plugin(mongooseElasticsearch, { client: es_1.esClient });
exports.UserModel = mongoose_1.model('User', UserSchema);
