import express from "express";
import { getSkillTransitionPaths } from "../services/skillTransitionService.js";

const router = express.Router();

/**
 * @route POST /api/skill-transition/analyze
 * @desc AI-powered skill transition analysis & career progression paths.
 */
router.post("/analyze", async (req, res) => {
  try {
    const { employeeId, currentSkills, targetRole } = req.body;

    if (!employeeId || !currentSkills || !targetRole) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const transitionPaths = await getSkillTransitionPaths(
      employeeId,
      currentSkills,
      targetRole,
    );
    res.json({ transitionPaths });
  } catch (error) {
    console.error("Error analyzing skill transition paths:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
