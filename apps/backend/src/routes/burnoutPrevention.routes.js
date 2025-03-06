import express from "express";
import { predictBurnout } from "../services/burnoutPreventionService.js";

// AI-based burnout detection & stress-preventive work models.

const router = express.Router();

/**
 * @route POST /api/burnout-prevention/predict
 * @desc AI-powered burnout risk detection & stress management insights
 */
router.post("/predict", async (req, res) => {
  try {
    const { workHours, stressLevel, sleepQuality } = req.body;

    if (workHours === undefined || stressLevel === undefined || sleepQuality === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const burnoutRisk = await predictBurnout(workHours, stressLevel, sleepQuality);
    res.json({ burnoutRisk });
  } catch (error) {
    console.error("Error in burnout risk prediction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
