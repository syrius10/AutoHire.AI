import express from "express";
import { predictProductivity } from "../services/collaborationTrackingService.js";

// AI-based collaboration insights & productivity tracking

const router = express.Router();

/**
 * @route POST /api/collaboration-tracking/analyze
 * @desc AI-powered collaboration tracking & productivity prediction
 */
router.post("/analyze", async (req, res) => {
  try {
    const { communication, workDistribution, feedback } = req.body;
    if (!communication || !workDistribution || !feedback) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const productivityScore = await predictProductivity(communication, workDistribution, feedback);
    res.json({ productivityScore });
  } catch (error) {
    console.error("Error in collaboration tracking:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
