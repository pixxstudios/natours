import express, { Request, Response, Application } from 'express';

const app: Application = express();

// middleware
app.use(express.json());

const getAllTours = (req: Request, res: Response) => {
    res.status(200).json({ message: "hello from ts" });
}
// app.get('/api/v1/tours', getAllTours);

const createTour = (req: Request, res: Response) => {
    console.log('>>> ', req.body);
    res.status(200).send("Updated");
}
// app.post('/api/v1/tours', createTour);

app.route('/api/v1/tours')
.get(getAllTours)
.post(createTour);

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log('App running on port ', PORT)
});