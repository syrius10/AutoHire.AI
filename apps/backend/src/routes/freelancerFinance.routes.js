import express from "express";
import { getIncomeForecast } from "../services/freelancerFinanceService.js";

// AI-based financial planning & income forecasting

const router = express.Router();

/**
 * @route POST /api/freelancer-finance/forecast
 * @desc AI-powered freelancer income forecasting
 */
router.post("/forecast", async (req, res) => {
  try {
    const { monthlyGigs, avgEarnings, experience } = req.body;
    if (!monthlyGigs || !avgEarnings || !experience) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const incomePrediction = await getIncomeForecast(monthlyGigs, avgEarnings, experience);
    res.json(incomePrediction);
  } catch (error) {
    console.error("Error in income forecasting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
