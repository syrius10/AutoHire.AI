import express from "express";
import { getWorkforceDemand } from "../services/economicWorkforceService.js";

// AI-driven workforce demand forecasting & economic predictions.

const router = express.Router();

/**
 * @route POST /api/economic-workforce/forecast
 * @desc AI-driven workforce demand forecasting
 */
router.post("/forecast", async (req, res) => {
  try {
    const { gdpGrowth, unemploymentRate, industryDemand } = req.body;

    if (!gdpGrowth || !unemploymentRate || !industryDemand) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const workforceDemand = await getWorkforceDemand(gdpGrowth, unemploymentRate, industryDemand);
    res.json({ workforceDemand });
  } catch (error) {
    console.error("Error forecasting workforce demand:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
