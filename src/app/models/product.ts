import { Schema, model } from 'mongoose';
import { Product, ProductDBModel } from './interfaces/product/product';
import { esClient } from '../db/es';

const mongooseElasticsearch = require('mongoose-elasticsearch-xp');

const ProductSchema: Schema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    auto: true,
    es_indexed: true
  },
  name: {
    type: Schema.Types.String,
    required: true,
    es_indexed: true
  },
  code: {
    type: Schema.Types.String,
    required: false,
    es_indexed: true,
    unique: true
  }
}, {
  collection: 'products'
});

ProductSchema.plugin(mongooseElasticsearch, { client: esClient });

export const ProductModel: ProductDBModel = model<Product>('Product', ProductSchema);
