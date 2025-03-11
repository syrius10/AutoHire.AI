import express from "express";
import { getTalentForecast } from "../services/predictiveTalentService";

const router = express.Router();
router.post("/forecast", getTalentForecast);

export default router;
