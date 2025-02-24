import express from "express";
import { getSuccessionPlan } from "../services/successionPlanningService";

const router = express.Router();
router.post("/plan", getSuccessionPlan);

export default router;