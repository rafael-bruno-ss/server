import { Promise } from 'es6-promise';
import app from '../app/app';
import db from '../app/db/db';
import * as chai from 'chai';
import * as chaiHttp from '../../node_modules/chai-http';

const expect = chai.expect;

const handleError = error => {
  const message: string = (error.response) ? error.response.res.text : error.message || error;
  return Promise.reject(`${error.name}: ${message}`);
};

chai.use(chaiHttp);

export {
  app,
  db,
  chai,
  expect,
  handleError
};
