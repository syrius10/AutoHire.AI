import express from "express";
import { screenCandidate, rankCandidate } from "../services/autonomousRecruiterService.js";

// Handles AI-powered candidate screening & shortlisting.

const router = express.Router();

/**
 * @route POST /api/autonomous-recruiter/screen
 * @desc Screen and shortlist candidates based on AI analysis
 */
router.post("/screen", async (req, res) => {
  try {
    const { resumeText, jobRole, candidateFeatures } = req.body;
    if (!resumeText || !jobRole || !candidateFeatures) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const screeningResult = await screenCandidate(resumeText, jobRole);
    const rankingScore = await rankCandidate(candidateFeatures);

    res.json({ screeningResult, rankingScore });
  } catch (error) {
    console.error("Error in candidate screening:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
