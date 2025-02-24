import express from "express";
import { getTurnoverRiskAnalysis } from "../services/corporateTurnoverRiskService.js";

// Predicts enterprise-wide attrition risks.

const router = express.Router();

/**
 * @route GET /api/corporate-turnover-risk/analyze
 * @desc Analyze company-wide attrition risk using AI
 * @access Public
 */
router.get("/analyze", async (req, res) => {
  try {
    const turnoverRisk = await getTurnoverRiskAnalysis();
    res.json(turnoverRisk);
  } catch (error) {
    console.error("Error fetching turnover risk analysis:", error);
    res.status(500).json({ error: "Failed to retrieve turnover risk data." });
  }
});

export default router;
