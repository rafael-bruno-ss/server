import db from '../app/db/db';
import * as mocha from 'mocha';

db.mongoose.connection.on('connected', () => {
  console.log('Database synchronized ...');
  mocha.run();
});
