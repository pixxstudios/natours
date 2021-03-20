import express, { Application } from 'express';
import morgan from 'morgan';
import tourRouter from './routes/tourRoutes';

const app: Application = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

// tours
app.use('/api/v1/tours', tourRouter);

export default app;