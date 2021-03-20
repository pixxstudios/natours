import { Router } from 'express';
import { getAllTours, createTour } from '../controllers/tourController';
const tourRouter = Router();

tourRouter.route('/')
.get(getAllTours)
.post(createTour);

export default tourRouter;