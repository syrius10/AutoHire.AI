import express from "express";
import { getEfficiencyPrediction } from "../services/efficiencyPredictorService";

const router = express.Router();
router.post("/efficiency", getEfficiencyPrediction);

export default router;