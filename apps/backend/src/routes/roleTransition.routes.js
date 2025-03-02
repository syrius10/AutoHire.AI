import express from "express";
import { suggestRoleTransition } from "../services/roleTransitionService.js";

// AI-powered job role transitions

const router = express.Router();

/**
 * @route POST /api/role-transition/suggest
 * @desc AI-driven job role transition suggestions
 */
router.post("/suggest", async (req, res) => {
  try {
    const { roleLevel, skillMatch, jobDemand, growthPotential } = req.body;

    if (!roleLevel || !skillMatch || !jobDemand || !growthPotential) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const transitionSuggestion = await suggestRoleTransition(roleLevel, skillMatch, jobDemand, growthPotential);
    res.json({ transitionSuggestion });
  } catch (error) {
    console.error("Error in role transition recommendation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
