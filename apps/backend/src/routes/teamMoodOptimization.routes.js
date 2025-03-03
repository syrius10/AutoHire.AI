import express from "express";
import { analyzeTeamMood } from "../services/teamMoodOptimizationService.js";

// AI-driven sentiment-based team collaboration tracking & optimization.

const router = express.Router();

/**
 * @route POST /api/team-mood/optimize
 * @desc AI-driven sentiment-based team collaboration tracking & optimization
 */
router.post("/optimize", async (req, res) => {
  try {
    const { feedbackText, engagementScore, satisfactionScore } = req.body;

    if (!feedbackText || engagementScore === undefined || satisfactionScore === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const moodAnalysis = await analyzeTeamMood(feedbackText, engagementScore, satisfactionScore);
    res.json({ teamMoodOptimization: moodAnalysis });
  } catch (error) {
    console.error("Error in team mood optimization:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
