import { Schema, model } from 'mongoose';
import { User, UserDBModel } from './interfaces/user/user';
import { esClient } from '../db/es';

const mongooseElasticsearch = require('mongoose-elasticsearch-xp');

const UserSchema: Schema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    unique: true,
    auto: true,
    es_indexed: true
  },
  name: {
    type: Schema.Types.String,
    unique: true,
    required: true,
    es_indexed: true
  },
  password: {
    type: Schema.Types.String,
    required: true
  }
}, {
  collection: 'users'
});

UserSchema.plugin(mongooseElasticsearch, { client: esClient });

export const UserModel: UserDBModel = model<User>('User', UserSchema);
