import express from "express";
import { quantumHiringDecision } from "../services/quantumAIDecisionMakingService.js";

const router = express.Router();

/**
 * @route GET /api/quantum-ai/hiring
 * @desc AI-powered quantum-enhanced hiring decisions.
 */
router.get("/hiring", async (req, res) => {
  try {
    const result = await quantumHiringDecision();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Quantum hiring decision failed." });
  }
});

export default router;
