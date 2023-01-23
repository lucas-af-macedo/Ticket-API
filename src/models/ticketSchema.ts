import joi from "joi";

export const ticketSchema = joi.object({
    name: joi.string().min(3).required()
});