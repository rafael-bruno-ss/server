"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DataLoaderFactory {
    constructor(db, requestedFields) {
        this.db = db;
        this.requestedFields = requestedFields;
    }
}
exports.DataLoaderFactory = DataLoaderFactory;
