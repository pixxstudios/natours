import { Router } from 'express';
import { getAllTours, createTour, getTour } from '../controllers/tourController';

const tourRouter = Router();

tourRouter.route('/')
.get(getAllTours)
.post(createTour);

tourRouter.route('/:id')
.get(getTour);

export default tourRouter;