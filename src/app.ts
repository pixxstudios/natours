import express, { Request, Response, Application, Router } from 'express';
import morgan from 'morgan';

const app: Application = express();

// middleware
app.use(morgan('dev'));
app.use(express.json());

// tours
const tourRouter = Router();
app.use('/api/v1/tours', tourRouter);

const getAllTours = (req: Request, res: Response) => {
    res.status(200).json({ message: "hello from ts" });
}

const createTour = (req: Request, res: Response) => {
    console.log('>>> ', req.body);
    res.status(200).send("Updated");
}

tourRouter.route('/')
.get(getAllTours)
.post(createTour);

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log('App running on port ', PORT)
});