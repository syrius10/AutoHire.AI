import express from "express";
import { analyzeDEI } from "../services/deiAnalyticsService.js";

// AI-powered DEI data analysis & insights

const router = express.Router();

/**
 * @route POST /api/dei-analytics/analyze
 * @desc AI-powered Diversity, Equity, and Inclusion (DEI) analysis
 */
router.post("/analyze", async (req, res) => {
  try {
    const insights = await analyzeDEI(req.body);
    res.json(insights);
  } catch (error) {
    console.error("Error in DEI analysis:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
