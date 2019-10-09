import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import * as compression from 'compression';
import * as helmet from 'helmet';

import { schema } from './graphql/schema';
import { extractJwtMiddleware } from './middlewares/extract-jwt.middleware';
import db from './db/db';

class App {
  public express: express.Application;
  private env: string;
  private config;

  constructor() {
    this.express = express();
    this.env = process.env.NODE_ENV || 'development';
    this.config = require(path.resolve(`${__dirname}./../config/config.json`))[this.env];
    this.middleware();
  }

  private middleware(): void {
    // mongoose.connect(`mongodb+srv://` +
    mongoose.connect(`mongodb://` +
      `${this.config.username}` + `:` +
      `${this.config.password}` + `@` +
      `${this.config.host}` +  `:` +
      `${this.config.port}` +  `/` +
      `${this.config.database}` + `?retryWrites=true`,
      { useNewUrlParser: true });

    mongoose.set('useCreateIndex', true);
    mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
    mongoose.connection.once('open', () => {
      console.log('Connected to database.');
    });

    if (process.env.NODE_ENV === 'development') {
      this.express.use(morgan('dev'));
    }
    this.express.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
    this.express.use(/\/((?!graphql).)*/, bodyParser.json());

    this.express.use(cors({
      origin: '*', // mudar o '*' para a url que eu quero que acesse essa api
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Encoding'],
      preflightContinue: false,
      optionsSuccessStatus: 204
    }));

    this.express.use(compression());
    this.express.use(helmet());

    this.express.use('/graphql',
      extractJwtMiddleware(),

      (req, res, next) => {
        if (!req['context']) {
          req['context'] = {};
        }
        req['context']['db'] = db;
        next();
      },

      graphqlHTTP(req => ({
        schema: schema,
        graphiql: process.env.NODE_ENV === 'development',
        context: req['context']
      }))
    );

    this.express.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
      const error: any = new Error('Not found');
      error.status = 404;
      next(error);
    });

    this.express.use((error, req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.status(error.status || 500);
      res.json({
        error: {
          message: error.message
        }
      });
    });
  }
}

export default new App().express;
