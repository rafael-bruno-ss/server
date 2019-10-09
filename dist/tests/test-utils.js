"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const es6_promise_1 = require("es6-promise");
const app_1 = require("../app/app");
exports.app = app_1.default;
const db_1 = require("../app/db/db");
exports.db = db_1.default;
const chai = require("chai");
exports.chai = chai;
const chaiHttp = require("../../node_modules/chai-http");
const expect = chai.expect;
exports.expect = expect;
const handleError = error => {
    const message = (error.response) ? error.response.res.text : error.message || error;
    return es6_promise_1.Promise.reject(`${error.name}: ${message}`);
};
exports.handleError = handleError;
chai.use(chaiHttp);
