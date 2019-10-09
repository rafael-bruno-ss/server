"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const elasticsearch_1 = require("elasticsearch");
const esClientParams = {
    host: '127.0.0.1:9200'
};
exports.esClient = new elasticsearch_1.Client(esClientParams);
