import express from "express";
import { forecastQuantumWorkforce } from "../services/quantumWorkforceForecastService.js";

// AI-driven real-time workforce forecasting with quantum computing.

const router = express.Router();

/**
 * @route POST /api/quantum-workforce-forecast/predict
 * @desc AI-powered workforce forecasting using quantum-based predictions
 */
router.post("/predict", async (req, res) => {
  try {
    const { economicGrowth, aiAdoption, hiringRate } = req.body;
    if (economicGrowth === undefined || aiAdoption === undefined || hiringRate === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const workforceDemand = await forecastQuantumWorkforce(economicGrowth, aiAdoption, hiringRate);
    res.json({ workforceDemand });
  } catch (error) {
    console.error("Quantum Workforce Forecasting Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
