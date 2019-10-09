"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../app/db/db");
const mocha = require("mocha");
db_1.default.mongoose.connection.on('connected', () => {
    console.log('Database synchronized ...');
    mocha.run();
});
