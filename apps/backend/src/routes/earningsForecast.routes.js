import express from "express";
import { getEarningsForecast } from "../services/earningsForecastService.js";

// AI-powered freelancer earnings predictions.

const router = express.Router();

router.post("/forecast", async (req, res) => {
  const result = await getEarningsForecast(req.body);
  res.json(result);
});

export default router;
