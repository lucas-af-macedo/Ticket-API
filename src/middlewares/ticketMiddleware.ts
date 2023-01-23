import { ticketSchema } from "../models/ticketSchema.js";
import { Name } from "../protocols/protocols.js";
import { Request, Response, NextFunction } from "express";


export async function ticketValidation(req: Request, res: Response, next: NextFunction) {
	const ticket = req.body as Name;

	const validation = ticketSchema.validate(ticket, { abortEarly: false });

	if (validation.error) {
		const errors = validation.error.details.map((detail) => detail.message);
		res.status(400).send(errors);
		return;
	}
	next();
}