import DateExtension from "@joi/date";
import JoiImport from "joi";
const joi = JoiImport.extend(DateExtension);

export const tripSchema = joi.object({
    to: joi.string().min(2).required(),
    by: joi.string().min(2).required(),
    date: joi.date().format("YYYY-MM-DD HH:mm").required(),
    seats: joi.number().min(1).required()
});