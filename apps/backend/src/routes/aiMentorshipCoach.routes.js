import express from "express";
import { getMentorshipInsights } from "../services/aiMentorshipCoachService.js";

// AI-driven mentorship & coaching API.

const router = express.Router();

/**
 * @route POST /api/mentorship-coach/analyze
 * @desc AI-powered mentorship & coaching insights
 */
router.post("/analyze", async (req, res) => {
  try {
    const { sessions, feedback, engagement } = req.body;
    if (sessions === undefined || feedback === undefined || engagement === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const insights = await getMentorshipInsights(sessions, feedback, engagement);
    res.json({ mentorshipGrowthIndex: insights });
  } catch (error) {
    console.error("Error in mentorship coach API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
