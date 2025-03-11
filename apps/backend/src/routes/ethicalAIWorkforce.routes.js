import express from "express";
import { evaluateEthicalDecision } from "../services/ethicalAIWorkforceService.js";

// AI-powered ethical workforce management system.

const router = express.Router();

/**
 * @route POST /api/ethical-ai-workforce/evaluate
 * @desc AI-powered ethical workforce decision evaluation
 */
router.post("/evaluate", async (req, res) => {
  try {
    const { action, impactScore } = req.body;
    if (!action || impactScore === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const ethicalAssessment = await evaluateEthicalDecision(
      action,
      impactScore,
    );
    res.json(ethicalAssessment);
  } catch (error) {
    console.error("Error in ethical AI workforce evaluation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
