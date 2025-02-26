import express from "express";
import { getJobMarketTrends } from "../services/jobMarketTrendsService.js";

// Fetches AI-driven job market analytics & trends

const router = express.Router();

// 📌 Route: Fetch job market trends
router.get("/", async (req, res) => {
  try {
    const trends = await getJobMarketTrends();
    res.json(trends);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch job market trends." });
  }
});

export default router;
