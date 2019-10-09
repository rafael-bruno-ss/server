import * as fs from 'fs';
import * as path from 'path';
import * as mongoose from 'mongoose';

import { DbConnection } from '../models/interfaces/dbConnection';

const basename: string = path.basename(module.filename);
let db = null;

if (!db) {
  db = {};

  fs.readdirSync(__dirname)
    .filter((file: string) => {
      const fileSlice: string = file.slice(-3);
      return (file.indexOf('.') !== 0) &&
            (file !== basename) &&
            ((fileSlice === '.js') || (fileSlice === '.ts'));
    })
    .forEach((file: string) => {
      const filepath = path.join(__dirname, file);
      const imported = require(filepath);
      if (typeof imported.modelName !== 'undefined') {
        db[imported.modelName] = imported;
      }
    });

  Object.keys(db).forEach((modelName: string) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db['mongoose'] = mongoose;
}

export default <DbConnection>db;
