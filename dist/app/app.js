"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const schema_1 = require("./graphql/schema");
const extract_jwt_middleware_1 = require("./middlewares/extract-jwt.middleware");
const db_1 = require("./db/db");
class App {
    constructor() {
        this.express = express();
        this.env = process.env.NODE_ENV || 'development';
        this.config = require(path.resolve(`${__dirname}./../config/config.json`))[this.env];
        this.middleware();
    }
    middleware() {
        // mongoose.connect(`mongodb+srv://` +
        mongoose.connect(`mongodb://` +
            `${this.config.username}` + `:` +
            `${this.config.password}` + `@` +
            `${this.config.host}` + `:` +
            `${this.config.port}` + `/` +
            `${this.config.database}` + `?retryWrites=true`, { useNewUrlParser: true });
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
            origin: '*',
            methods: ['GET', 'POST'],
            allowedHeaders: ['Content-Type', 'Authorization', 'Accept-Encoding'],
            preflightContinue: false,
            optionsSuccessStatus: 204
        }));
        this.express.use(compression());
        this.express.use(helmet());
        this.express.use('/graphql', extract_jwt_middleware_1.extractJwtMiddleware(), (req, res, next) => {
            if (!req['context']) {
                req['context'] = {};
            }
            req['context']['db'] = db_1.default;
            next();
        }, graphqlHTTP(req => ({
            schema: schema_1.schema,
            graphiql: process.env.NODE_ENV === 'development',
            context: req['context']
        })));
        this.express.use((req, res, next) => {
            const error = new Error('Not found');
            error.status = 404;
            next(error);
        });
        this.express.use((error, req, res, next) => {
            res.status(error.status || 500);
            res.json({
                error: {
                    message: error.message
                }
            });
        });
    }
}
exports.default = new App().express;
