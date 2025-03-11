import express from "express";
import { getEconomicForecast } from "../services/economicForecastService.js";

// AI-based employer-employee economic forecasting.

const router = express.Router();

/**
 * @route POST /api/economic-forecast/predict
 * @desc AI-driven employer-employee economic forecasting
 */
router.post("/predict", async (req, res) => {
  try {
    const { avgSalary, costOfLiving, inflationRate } = req.body;

    if (!avgSalary || !costOfLiving || !inflationRate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const economicForecast = await getEconomicForecast(
      avgSalary,
      costOfLiving,
      inflationRate,
    );
    res.json({ economicForecast });
  } catch (error) {
    console.error("Error predicting economic trends:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
