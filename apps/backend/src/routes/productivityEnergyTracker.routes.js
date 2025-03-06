import express from "express";
import { trackProductivity } from "../services/productivityEnergyTrackerService.js";

// AI-driven real-time employee productivity & energy tracking.

const router = express.Router();

/**
 * @route POST /api/productivity-energy/track
 * @desc AI-powered real-time employee productivity & energy tracking
 */
router.post("/track", async (req, res) => {
  try {
    const { sleepHours, workHours, breaksTaken } = req.body;

    if (sleepHours === undefined || workHours === undefined || breaksTaken === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const productivityScore = await trackProductivity(sleepHours, workHours, breaksTaken);
    res.json({ productivityScore });
  } catch (error) {
    console.error("Error in productivity tracking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
