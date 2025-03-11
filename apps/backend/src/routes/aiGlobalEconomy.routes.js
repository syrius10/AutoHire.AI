import express from "express";
import {
  analyzeMarket,
  recommendPolicy,
} from "../services/aiGlobalEconomyService.js";

const router = express.Router();

/**
 * @route GET /api/ai-economy/market
 * @desc AI-powered global employment trends.
 */
router.get("/market", async (req, res) => {
  try {
    const result = await analyzeMarket();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Market analysis failed." });
  }
});

/**
 * @route GET /api/ai-economy/policy
 * @desc AI-powered workforce policy recommendations.
 */
router.get("/policy", async (req, res) => {
  try {
    const result = await recommendPolicy();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Policy recommendation failed." });
  }
});

export default router;
