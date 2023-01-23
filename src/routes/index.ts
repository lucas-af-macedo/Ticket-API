import { Router } from "express";
import ticketRouter from "./ticketRouter.js";
import tripRouter from "./tripRouter.js";

const router = Router();

router.use(ticketRouter);
router.use(tripRouter);

export default router;