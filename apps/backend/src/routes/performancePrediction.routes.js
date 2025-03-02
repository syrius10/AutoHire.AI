import express from "express";
import { predictEmployeePerformance } from "../services/performancePredictionService.js";

// AI-driven employee performance forecasting

const router = express.Router();

/**
 * @route POST /api/performance-prediction/predict
 * @desc AI-driven employee performance forecasting
 */
router.post("/predict", async (req, res) => {
  try {
    const { workHours, completionRate, experience } = req.body;

    if (!workHours || !completionRate || !experience) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const performanceScore = await predictEmployeePerformance(workHours, completionRate, experience);
    res.json({ performanceScore });
  } catch (error) {
    console.error("Error predicting employee performance:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
