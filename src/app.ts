import express, { Request, Response, Application } from 'express';

const app: Application = express();

// middleware
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "hello from ts" });
});

app.get('/api/v1/tours', (req: Request, res: Response) => {
    res.status(200).json({ message: "all tours info" });
});

app.post('/api/v1/tours', (req: Request, res: Response) => {
    console.log('>>> ', req.body);
    res.status(200).send("Updated");
});

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log('App running on port ', PORT)
});