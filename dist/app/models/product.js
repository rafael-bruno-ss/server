"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const es_1 = require("../db/es");
const mongooseElasticsearch = require('mongoose-elasticsearch-xp');
const ProductSchema = new mongoose_1.Schema({
    id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        unique: true,
        auto: true,
        es_indexed: true
    },
    name: {
        type: mongoose_1.Schema.Types.String,
        required: true,
        es_indexed: true
    },
    code: {
        type: mongoose_1.Schema.Types.String,
        required: false,
        es_indexed: true,
        unique: true
    }
}, {
    collection: 'products'
});
ProductSchema.plugin(mongooseElasticsearch, { client: es_1.esClient });
exports.ProductModel = mongoose_1.model('Product', ProductSchema);
