import express, { Request, Response, Application } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: "hello from ts" });
});

const PORT: number = 3000;
app.listen(PORT, () => {
    console.log('App running on port ', PORT)
});