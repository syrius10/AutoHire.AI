import express from "express";
import { evaluateHiringEthics } from "../services/ethicsGovernanceService.js";

// AI-driven hiring ethics & fair decision-making.

const router = express.Router();

/**
 * @route POST /api/ethics-governance/evaluate
 * @desc AI-powered ethical hiring & decision-making
 */
router.post("/evaluate", async (req, res) => {
  try {
    const { candidateScore, diversityFactor, hrBiasScore } = req.body;
    if (candidateScore === undefined || diversityFactor === undefined || hrBiasScore === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const ethicsResult = await evaluateHiringEthics(candidateScore, diversityFactor, hrBiasScore);
    res.json(ethicsResult);
  } catch (error) {
    console.error("Ethics Governance Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
