import express from "express";
import { getProductivityInsights, getProductivityTips } from "../services/realTimeProductivityService.js";

const router = express.Router();

/**
 * @route GET /api/real-time-productivity/insights
 * @desc Fetches AI-driven real-time productivity insights
 */
router.get("/insights", async (req, res) => {
  try {
    const insights = await getProductivityInsights();
    res.json({ insights });
  } catch (error) {
    console.error("Error fetching productivity insights:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route GET /api/real-time-productivity/tips
 * @desc Fetches AI-generated productivity coaching tips
 */
router.get("/tips", async (req, res) => {
  try {
    const tips = await getProductivityTips();
    res.json({ tips });
  } catch (error) {
    console.error("Error fetching productivity tips:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
