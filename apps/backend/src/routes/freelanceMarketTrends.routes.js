import express from "express";
import { getMarketTrends } from "../services/freelanceMarketTrendsService.js";

// Fetches market trends for freelance jobs.

const router = express.Router();

router.get("/trends", async (req, res) => {
  const result = await getMarketTrends();
  res.json(result);
});

export default router;
