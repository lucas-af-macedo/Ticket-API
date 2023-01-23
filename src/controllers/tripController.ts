import { Request, Response } from "express";
import { TripObject } from "../protocols/protocols.js";
import { deleteTripRepository, getAllTripRepository, getTripRepository, postTripRepository } from "../repositories/tripRepository.js";

export async function postTrip(req: Request, res: Response){
    const trip = req.body as TripObject;

    try{
        await postTripRepository(trip);

        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function deleteTrip(req: Request, res: Response){
    const id = Number(req.params.id) as number;

    try{
        await deleteTripRepository(id);

        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function getTrip(req: Request, res: Response){
    const id = Number(req.params.id) as number;

    try{
        const trip = await getTripRepository(id);

        res.status(200).send(trip);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function getAllTrip(req: Request, res: Response){
    const id = Number(req.params.id) as number;

    try{
        const trip = await getAllTripRepository();

        res.status(200).send(trip);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}