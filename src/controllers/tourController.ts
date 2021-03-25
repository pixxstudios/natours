import { Request, Response, NextFunction } from 'express';
import Tours from '../models/tourModel';

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

export const getTour = async (req: Request, res: Response) => {
    try {
        await Tours.findById(req.params.id).then(tour => {
            res.status(400).json({
                message: 'Success',
                data: {
                    tour
                }
            });
        })
    } catch(err) {
        res.status(404).json({
            message: 'Error retreiving tour',
            data: err
        });
    }
}

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

export const updateTour = async (req: Request, res: Response) => {
    try {
        const tour = await Tours.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(201).json({
            status: 'Success',
            data: {
                tour
            }
        });
    } catch(err) {
        res.status(400).json({
            status: 'Fail',
            message: err
        });
    }
}

export const deleteTour = async (req: Request,  res: Response) => {
    try {
        await Tours.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Success',
            data: null
        });
    } catch(err) {
        res.status(404).json({
            message: 'Failed',
            data: err
        });
    }
};
