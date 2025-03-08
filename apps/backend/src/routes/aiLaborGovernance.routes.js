import express from "express";
import { checkLaborCompliance } from "../services/aiLaborGovernanceService.js";

// AI-driven labor law enforcement for AI-managed jobs

const router = express.Router();

/**
 * @route GET /api/ai-labor-governance/compliance
 * @desc AI-driven labor law compliance tracking
 */
router.get("/compliance", async (req, res) => {
  try {
    const complianceResult = await checkLaborCompliance();
    res.json(complianceResult);
  } catch (error) {
    console.error("Error checking AI labor compliance:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
