import { Request, Response, NextFunction } from 'express';

export const getAllTours = (req: Request, res: Response) => {
    res.status(200).json({ message: "hello from ts" });
}

export const createTour = (req: Request, res: Response) => {
    console.log('>>> ', req.body);
    res.status(200).send("Updated");
}

export const getTour = (req: Request, res: Response) => {
    res.status(200).send('tour');
}

export const checkBody = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.name || !req.body.price) {
        return res.status(404).json({ 'message': 'Missing name or price' })
    }
    next();
}