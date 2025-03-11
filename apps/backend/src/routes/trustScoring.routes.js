import express from "express";
import { calculateTrustScore } from "../services/trustScoringService.js";

/*
    Handles trust & credibility scoring for:

Freelancers & employers
Work history analysis
Blockchain-based reputation tracking
*/

const router = express.Router();

/**
 * @route POST /api/trust-scoring/calculate
 * @desc AI-based freelancer & employer trust scoring
 */
router.post("/calculate", async (req, res) => {
  try {
    const { userId, workHistory, ratings, disputeCount } = req.body;

    if (
      !userId ||
      !workHistory ||
      ratings === undefined ||
      disputeCount === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const trustScore = await calculateTrustScore(
      userId,
      workHistory,
      ratings,
      disputeCount,
    );
    res.json({ userId, trustScore });
  } catch (error) {
    console.error("Error in AI trust scoring:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
