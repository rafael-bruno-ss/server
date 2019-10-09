"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePort = (val) => {
    const port = (typeof val === 'string') ? parseInt(val) : val;
    if (isNaN(port)) {
        return val;
    }
    else if (port >= 0) {
        return port;
    }
    else {
        return false;
    }
};
exports.onError = (server) => {
    return (error) => {
        const addr = server.address();
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
        switch (error.code) {
            case 'EACCES':
                console.error(`${bind} requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${bind} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    };
};
exports.onListening = (server, db) => {
    return () => {
        const addr = server.address();
        const bind = (typeof addr === 'string') ? `pipe ${addr}` : `http://${addr.address}:${addr.port}`;
        console.log(`Listening at ${bind} ...`);
        db.mongoose.modelNames().forEach(model => {
            // @ts-ignore
            db.mongoose.models[model].esSynchronize()
                .then(() => console.log(`${model}Model synchronized`))
                .catch((err) => console.log(`Error while synchronizing ${model}Model: ${err}`));
        });
    };
};
exports.handleError = (error) => {
    const errorMessage = `${error.name}: ${error.message}`;
    const env = process.env.NODE_ENV;
    if (env !== 'test' && env !== 'pipelines') {
        console.log(errorMessage);
    }
    return Promise.reject(new Error(errorMessage));
};
exports.throwError = (condition, message) => {
    if (condition) {
        throw new Error(message);
    }
};
