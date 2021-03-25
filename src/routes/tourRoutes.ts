import { Router } from 'express';
import { getAllTours, createTour, getTour, updateTour } from '../controllers/tourController';

const tourRouter = Router();

tourRouter.route('/')
.get(getAllTours)
.post(createTour);

tourRouter.route('/:id')
.get(getTour)
.patch(updateTour);

export default tourRouter;