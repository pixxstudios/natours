import { Request, Response, NextFunction } from 'express';
import Tours from '../models/tourModel';

export const getAllTours = async (req: Request, res: Response) => {
    try {
        await Tours.find().then(tours => {
        res.status(200).json({
            message: "Success!",
            data: {
                tours
            }
        })
    })
    } catch (err) {
        res.status(404).json({
            message: 'Error',
            data: err
        });
    }
};

export const createTour = async (req: Request, res: Response) => {
    try {
        const newTour = await Tours.create(req.body);
        res.status(201).json({
            status: 'Success',
            data: {
                tour: newTour
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'Fail',
            message: 'Invalid data sent'
        });
    }
}

export const getTour = (req: Request, res: Response) => {
    res.status(200).send('tour');
}