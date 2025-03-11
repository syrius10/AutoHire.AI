import express from "express";
import { recommendLearningPath } from "../services/selfUpgradingSkillsService.js";

// AI-powered personalized skill learning & self-improvement.

const router = express.Router();

/**
 * @route POST /api/self-upgrading-skills/recommend
 * @desc AI-powered skill learning path recommendation
 */
router.post("/recommend", async (req, res) => {
  try {
    const { currentSkill, industryDemand } = req.body;
    if (!currentSkill || !industryDemand) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const recommendation = await recommendLearningPath(
      currentSkill,
      industryDemand,
    );
    res.json({ skillRecommendation: recommendation });
  } catch (error) {
    console.error("Error recommending skill learning path:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
