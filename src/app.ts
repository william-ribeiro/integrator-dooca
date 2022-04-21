import 'dotenv/config';
import 'express-async-errors';
import 'reflect-metadata';

import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import { AppError } from './errors';
import routes from './routes';

const app = express();
app.use(express.json());
app.use(helmet());
app.use(routes);

app.use(
  cors({
    origin: '*',
  }),
);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(Number(err.statusCode)).json({
      message: err.message,
    });
  }
  return response.status(500).json({
    status: 'Error',
    message: `Internal server error ${err.message}`,
  });
});

export { app };
