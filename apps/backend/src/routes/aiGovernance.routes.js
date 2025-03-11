import express from "express";
import { enforceAIGovernance } from "../services/aiGovernanceService.js";

// AI-powered AI workforce governance & compliance API routes

const router = express.Router();

/**
 * @route GET /api/ai-governance/enforce
 * @desc AI-driven governance framework enforcement
 */
router.get("/enforce", async (req, res) => {
  try {
    const governanceStatus = await enforceAIGovernance();
    res.json({ status: "Success", governance: governanceStatus });
  } catch (error) {
    console.error("Error enforcing AI governance:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
