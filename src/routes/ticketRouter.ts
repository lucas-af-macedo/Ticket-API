import { Router } from "express";
import { deleteTicket, getAllTicketFromTrip, getTicket, modifyName, postTicket } from "../controllers/ticketController.js";
import { ticketValidation } from "../middlewares/ticketMiddleware.js";

const ticketRouter = Router();

ticketRouter.post("/trip/:tripId/ticket/:seatId", ticketValidation, postTicket);
ticketRouter.get("/ticket/:id", getTicket);
ticketRouter.get("/trip/:tripId/ticket", getAllTicketFromTrip);
ticketRouter.put("/ticket/:id", ticketValidation, modifyName);
ticketRouter.delete("/ticket/:id", deleteTicket);

export default ticketRouter;