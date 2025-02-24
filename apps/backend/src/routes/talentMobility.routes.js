import express from "express";
import { getTalentMobilityInsights } from "../services/talentMobilityService.js";

// Manages AI-powered talent mobility insights.

const router = express.Router();

/**
 * @route GET /api/talent-mobility/insights
 * @desc Fetch internal mobility suggestions for employees
 * @access Public
 */
router.get("/insights", async (req, res) => {
  try {
    const insights = await getTalentMobilityInsights();
    res.json(insights);
  } catch (error) {
    console.error("Error fetching talent mobility insights:", error);
    res.status(500).json({ error: "Failed to retrieve talent mobility data." });
  }
});

export default router;
