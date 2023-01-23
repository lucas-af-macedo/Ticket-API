import { Router } from "express";
import { deleteTrip, getAllTrip, getTrip, postTrip } from "../controllers/tripController.js";

const tripRouter = Router();

tripRouter.post("/trip", postTrip);
tripRouter.get("/trip/:id", getTrip);
tripRouter.get("/trip", getAllTrip);
tripRouter.delete("/trip/:id", deleteTrip);

export default tripRouter;
