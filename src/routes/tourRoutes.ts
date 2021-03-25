import { Router } from 'express';
import { getAllTours, createTour, getTour, updateTour, deleteTour } from '../controllers/tourController';

const tourRouter = Router();

tourRouter.route('/')
.get(getAllTours)
.post(createTour);

tourRouter.route('/:id')
.get(getTour)
.patch(updateTour)
.delete(deleteTour);

export default tourRouter;