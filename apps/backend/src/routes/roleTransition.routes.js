import express from "express";
import { getRoleTransitionRecommendations } from "../services/roleTransitionService.js";

const router = express.Router();

/**
 * @route POST /api/role-transition/recommend
 * @desc AI-based job role transition recommendations
 */
router.post("/recommend", async (req, res) => {
  try {
    const {
      employeeId,
      currentRole,
      careerGoals,
      roleLevel,
      skillMatch,
      jobDemand,
      growthPotential,
    } = req.body;

    // Ensure at least one set of parameters is provided
    if (
      !(employeeId && currentRole && careerGoals) &&
      !(roleLevel && skillMatch && jobDemand && growthPotential)
    ) {
      return res
        .status(400)
        .json({ error: "Missing required fields for role transition" });
    }

    const transitionPlan = await getRoleTransitionRecommendations({
      employeeId,
      currentRole,
      careerGoals,
      roleLevel,
      skillMatch,
      jobDemand,
      growthPotential,
    });

    res.json(transitionPlan);
  } catch (error) {
    console.error("Error recommending role transitions:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
