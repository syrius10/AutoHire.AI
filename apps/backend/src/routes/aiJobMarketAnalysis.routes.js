import express from "express";
import { analyzeJobMarket } from "../services/aiJobMarketAnalysisService.js";

// AI-driven real-time job market insights API routes

const router = express.Router();

/**
 * @route GET /api/ai-job-market-analysis/trends
 * @desc Fetch AI-driven real-time job market insights
 */
router.get("/trends", async (req, res) => {
  try {
    const jobMarketData = await analyzeJobMarket();
    res.json(jobMarketData);
  } catch (error) {
    console.error("Error in job market analysis:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
