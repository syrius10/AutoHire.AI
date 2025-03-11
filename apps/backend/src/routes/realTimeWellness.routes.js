import express from "express";
import { trackWellness } from "../services/realTimeWellnessService.js";

// AI-powered real-time employee mental health monitoring.

const router = express.Router();

/**
 * @route POST /api/wellness/track
 * @desc AI-powered real-time employee mental health tracking
 */
router.post("/track", async (req, res) => {
  try {
    const { stressLevel, sleepHours, workHours, workload } = req.body;

    if (
      stressLevel === undefined ||
      sleepHours === undefined ||
      workHours === undefined ||
      workload === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const wellnessReport = await trackWellness(
      stressLevel,
      sleepHours,
      workHours,
      workload,
    );
    res.json({ wellnessReport });
  } catch (error) {
    console.error("Error in wellness tracking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
