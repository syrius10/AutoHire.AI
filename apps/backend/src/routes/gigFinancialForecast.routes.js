import express from "express";
import { predictFutureIncome } from "../services/gigFinancialForecastService.js";

// AI-powered predictive financial forecasting.

const router = express.Router();

/**
 * @route POST /api/gig-financial-forecast/predict
 * @desc AI-powered freelancer financial forecasting
 */
router.post("/predict", async (req, res) => {
  try {
    const { pastIncome } = req.body;
    if (pastIncome === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const predictedIncome = await predictFutureIncome(pastIncome);
    res.json({ futureIncome: predictedIncome });
  } catch (error) {
    console.error("Error in financial forecasting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
