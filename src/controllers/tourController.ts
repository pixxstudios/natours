import { Request, Response } from 'express';

export const getAllTours = (req: Request, res: Response) => {
    res.status(200).json({ message: "hello from ts" });
}

export const createTour = (req: Request, res: Response) => {
    console.log('>>> ', req.body);
    res.status(200).send("Updated");
}