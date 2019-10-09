import * as jwt from 'jsonwebtoken';

import db from './../db/db';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import { JWT_SECRET } from '../utils/constants';

export const extractJwtMiddleware = (): RequestHandler => {

  return (req: Request, res: Response, next: NextFunction): void => {

    const authorization: string = req.get('authorization');
    const token: string = authorization ? authorization.split(' ')[1] : undefined;

    req['context'] = {};
    req['context']['authorization'] = authorization;

    if (!token) { return next(); }

    jwt.verify(token, JWT_SECRET, (err, decoded: any) => {
      if (err) {
        return next();
      }
      db.User.findOne({
        id: decoded.sub
      })
      .then(user => {
        if (user) {
          req['context']['authUser'] = {
            id: user.id,
            name: user.name
          };
        }
        return next();
      })
    });
  };
};
