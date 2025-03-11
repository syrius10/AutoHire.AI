import express from "express";
import { assessDecisionConfidence } from "../services/leadershipDecisionService.js";

// AI-based Real-Time Leadership Decision-Making

const router = express.Router();

/**
 * @route POST /api/leadership-decision/assess
 * @desc AI-powered leadership decision confidence assessment.
 */
router.post("/assess", async (req, res) => {
  try {
    const { leaderId, experience, strategicThinking, teamLeadership } =
      req.body;

    if (!leaderId || !experience || !strategicThinking || !teamLeadership) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const decisionConfidence = await assessDecisionConfidence(
      leaderId,
      experience,
      strategicThinking,
      teamLeadership,
    );
    res.json(decisionConfidence);
  } catch (error) {
    console.error("Error in leadership decision assessment:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
