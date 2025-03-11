import express from "express";
import { forecastHiringDemand } from "../services/workforceForecastingService.js";

// Predicts workforce demand & productivity trends

const router = express.Router();

/**
 * @route POST /api/workforce-forecasting/predict
 * @desc Predicts workforce demand & productivity trends
 */
router.post("/predict", async (req, res) => {
  try {
    const { year, industryGrowth, hiringBudget } = req.body;
    if (!year || !industryGrowth || !hiringBudget) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const forecast = await forecastHiringDemand(
      year,
      industryGrowth,
      hiringBudget,
    );
    res.json(forecast);
  } catch (error) {
    console.error("Error in workforce forecasting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
