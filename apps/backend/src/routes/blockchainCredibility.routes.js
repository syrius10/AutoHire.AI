import express from "express";
import { getFreelancerCredibilityScore } from "../services/blockchainCredibilityService.js";

// AI-powered freelancer credibility scoring via blockchain analysis

const router = express.Router();

/**
 * @route POST /api/blockchain-credibility/score
 * @desc AI-driven freelancer credibility scoring
 */
router.post("/score", async (req, res) => {
  try {
    const { pastJobs, rating, paymentTimeliness } = req.body;
    if (pastJobs === undefined || rating === undefined || paymentTimeliness === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const credibilityScore = await getFreelancerCredibilityScore(pastJobs, rating, paymentTimeliness);
    res.json({ credibilityScore });
  } catch (error) {
    console.error("Error calculating freelancer credibility score:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
