import { Server } from 'http';
import { DbConnection } from '../models/interfaces/dbConnection';

export const normalizePort = (val: number | string ): number | string | boolean => {
  const port: number = (typeof val === 'string') ? parseInt(val) : val;
  if (isNaN(port)) {
    return val;
  } else if (port >= 0) {
    return port;
  } else {
    return false;
  }
};

export const onError = (server: Server) => {
  return (error: NodeJS.ErrnoException): void => {
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

export const onListening = (server: Server, db: DbConnection) => {
  return (): void => {
    const addr = server.address();
    const bind = (typeof addr === 'string') ? `pipe ${addr}` : `http://${addr.address}:${addr.port}`;
    console.log(`Listening at ${bind} ...`);

    db.mongoose.modelNames().forEach(model => {
      // @ts-ignore
      db.mongoose.models[model].esSynchronize()
        .then(() => console.log(`${model}Model synchronized`))
        .catch((err) => console.log(`Error while synchronizing ${model}Model: ${err}`));
    })
    
  };
};

export const handleError = (error: Error) => {
  const errorMessage: string = `${error.name}: ${error.message}`;
  const env: string = process.env.NODE_ENV;
  if (env !== 'test' && env !== 'pipelines') {
    console.log(errorMessage);
  }
  return Promise.reject(new Error(errorMessage));
};

export const throwError = (condition: boolean, message: string): void => {
  if (condition) {
    throw new Error(message);
  }
};
