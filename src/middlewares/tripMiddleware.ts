import { tripSchema } from "../models/tripSchema.js";
import { TripObject } from "../protocols/protocols.js";
import { Request, Response, NextFunction } from "express";


export async function tripValidation(req: Request, res: Response, next: NextFunction) {
	const trip = req.body as TripObject;

	const validation = tripSchema.validate(trip, { abortEarly: false });

	if (validation.error) {
		const errors = validation.error.details.map((detail) => detail.message);
		res.status(400).send(errors);
		return;
	}
	next();
}