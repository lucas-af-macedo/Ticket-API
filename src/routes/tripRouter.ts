import { Router } from "express";
import { deleteTrip, getAllTrip, getTrip, postTrip } from "../controllers/tripController.js";
import { tripValidation } from "../middlewares/tripMiddleware.js";

const tripRouter = Router();

tripRouter.post("/trip", tripValidation, postTrip);
tripRouter.get("/trip/:id", getTrip);
tripRouter.get("/trip", getAllTrip);
tripRouter.delete("/trip/:id", deleteTrip);

export default tripRouter;
