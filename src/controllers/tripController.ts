import { Request, Response } from "express";
import { TripObject } from "../protocols/protocols.js";
import { deleteTripRepository, getAllTripRepository, getTripRepository, postTripRepository } from "../repositories/tripRepository.js";
import { testDate, tripExists } from "../services/tripService.js";

export async function postTrip(req: Request, res: Response){
    const trip = req.body as TripObject;
    if(testDate(trip.date)){
        res.status(400).send({message: "The date must be in the future"});
        return;
    }

    try{
        await postTripRepository(trip);

        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function deleteTrip(req: Request, res: Response){
    const id = Number(req.params.id) as number;
    if(await tripExists(id)){
        res.status(404).send({message: "Trip not found"});
        return;
    }

    try{
        await deleteTripRepository(id);

        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function getTrip(req: Request, res: Response){
    const id = Number(req.params.id) as number;
    if(await tripExists(id)){
        res.status(404).send({message: "Trip not found"});
        return;
    }

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