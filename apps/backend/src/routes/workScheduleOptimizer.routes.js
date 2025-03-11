import express from "express";
import { optimizeWorkSchedule } from "../services/workScheduleOptimizerService.js";

// AI-powered work schedule optimization for well-being.

const router = express.Router();

/**
 * @route POST /api/work-schedule/optimize
 * @desc AI-powered work schedule optimization
 */
router.post("/optimize", async (req, res) => {
  try {
    const { workload, preferredHours, energyLevel } = req.body;

    if (
      workload === undefined ||
      preferredHours === undefined ||
      energyLevel === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const optimizedSchedule = await optimizeWorkSchedule(
      workload,
      preferredHours,
      energyLevel,
    );
    res.json({ optimizedSchedule });
  } catch (error) {
    console.error("Error in work schedule optimization:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
