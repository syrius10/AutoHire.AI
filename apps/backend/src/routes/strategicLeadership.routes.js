import express from "express";
import { evaluateLeadershipPotential } from "../services/strategicLeadershipService.js";

// AI-based leadership talent identification.

const router = express.Router();

/**
 * @route POST /api/strategic-leadership/evaluate
 * @desc AI-powered strategic leadership potential identification
 */
router.post("/evaluate", async (req, res) => {
  try {
    const { experience, strategyScore, projects } = req.body;
    if (experience === undefined || strategyScore === undefined || projects === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const potential = await evaluateLeadershipPotential(experience, strategyScore, projects);
    res.json({ leadershipPotential: potential });
  } catch (error) {
    console.error("Error in strategic leadership API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
