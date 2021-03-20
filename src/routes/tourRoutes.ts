import { Router } from 'express';
import { getAllTours, createTour, getTour, checkBody } from '../controllers/tourController';
const tourRouter = Router();

tourRouter.param('id', (req, res, next, val) => {
    console.log('id ', val);
    next();
});

tourRouter.route('/')
.get(getAllTours)
.post(checkBody, createTour);

tourRouter.route('/:id')
.get(getTour);

export default tourRouter;