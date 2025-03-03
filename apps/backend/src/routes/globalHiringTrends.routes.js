import express from "express";
import { getHiringTrends } from "../services/globalHiringTrendsService.js";

// AI-powered hiring trends & future job market insights.

const router = express.Router();

/**
 * @route POST /api/global-hiring-trends/analyze
 * @desc AI-powered hiring trends & job market insights
 */
router.post("/analyze", async (req, res) => {
  try {
    const { industryGrowth, remoteWork, aiAdoption } = req.body;

    if (!industryGrowth || !remoteWork || !aiAdoption) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hiringTrends = await getHiringTrends(industryGrowth, remoteWork, aiAdoption);
    res.json({ hiringTrends });
  } catch (error) {
    console.error("Error analyzing global hiring trends:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
