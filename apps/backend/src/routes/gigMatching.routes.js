import express from "express";
import { getGigRecommendation } from "../services/gigMatchingService.js";

// AI-driven gig opportunity recommendations

const router = express.Router();

/**
 * @route POST /api/gig-matching/recommendation
 * @desc AI-powered gig matching for freelancers
 */
router.post("/recommendation", async (req, res) => {
  try {
    const { skillMatch, marketDemand, rating } = req.body;
    if (!skillMatch || !marketDemand || !rating) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const recommendation = await getGigRecommendation(skillMatch, marketDemand, rating);
    res.json(recommendation);
  } catch (error) {
    console.error("Error in gig matching:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
