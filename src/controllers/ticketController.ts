import { Request, Response } from "express";
import { deleteTicketRepository, getAllTicketFromTripRepository, getTicketRepository, modifyNameRepository, postTicketRepository } from "../repositories/ticketRepository.js";

export async function postTicket(req: Request, res: Response){
    const seatId = Number(req.params.seatId) as number;
    const tripId = Number(req.params.tripId) as number;
    const name = req.body.name as string;

    try{
        await postTicketRepository(seatId, tripId, name);

        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function deleteTicket(req: Request, res: Response){
    const id = Number(req.params.id) as number;

    try{
        await deleteTicketRepository(id);

        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function modifyName(req: Request, res: Response){
    const id = Number(req.params.id) as number;
    const name = req.body.name as string;

    try{
        await modifyNameRepository(id, name);

        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function getTicket(req: Request, res: Response){
    const id = Number(req.params.id) as number;

    try{
        const seat = await getTicketRepository(id);

        res.status(200).send(seat);
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function getAllTicketFromTrip(req: Request, res: Response){
    const tripId = Number(req.params.tripId) as number;

    try{
        const seat = await getAllTicketFromTripRepository(tripId);

        res.status(200).send(seat);
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
}