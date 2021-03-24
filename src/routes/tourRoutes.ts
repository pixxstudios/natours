import { Router } from 'express';
import { getAllTours, createTour, getTour, checkBody } from '../controllers/tourController';
import Tours from '../models/tourModel';

const tourRouter = Router();

tourRouter.route('/')
.get(getAllTours)
.post(checkBody, createTour);

tourRouter.route('/:id')
.get(getTour);

export default tourRouter;