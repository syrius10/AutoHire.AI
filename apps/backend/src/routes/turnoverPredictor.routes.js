import express from "express";
import { predictTurnoverRisk } from "../services/turnoverPredictorService";

const router = express.Router();
router.post("/turnover", predictTurnoverRisk);

export default router;
