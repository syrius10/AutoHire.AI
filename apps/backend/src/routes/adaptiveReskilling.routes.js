import express from "express";
import { recommendReskilling } from "../services/adaptiveReskillingService.js";

// AI-based skill learning paths

const router = express.Router();

/**
 * @route POST /api/adaptive-reskilling/recommend
 * @desc AI-driven reskilling recommendations based on skill gaps
 */
router.post("/recommend", async (req, res) => {
  try {
    const { skillGap, learningSpeed, jobDemand } = req.body;

    if (!skillGap || !learningSpeed || !jobDemand) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const reskillingRecommendation = await recommendReskilling(skillGap, learningSpeed, jobDemand);
    res.json({ reskillingRecommendation });
  } catch (error) {
    console.error("Error in reskilling recommendation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
