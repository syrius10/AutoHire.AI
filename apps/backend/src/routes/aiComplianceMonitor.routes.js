import express from "express";
import { monitorAICompliance } from "../services/aiComplianceMonitorService.js";

const router = express.Router();

/**
 * @route POST /api/ai-compliance-monitor/check
 * @desc AI-powered compliance tracking for AI-driven hiring decisions.
 */
router.post("/check", async (req, res) => {
  try {
    const { hiringDecision, fairnessScore, legalStandards } = req.body;

    if (!hiringDecision || fairnessScore === undefined || !legalStandards) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const complianceReport = await monitorAICompliance(hiringDecision, fairnessScore, legalStandards);
    res.json({ complianceReport });
  } catch (error) {
    console.error("Error in AI compliance monitoring:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
