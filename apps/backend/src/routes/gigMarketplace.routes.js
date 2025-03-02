import express from "express";
import { getGigMatches } from "../services/gigMarketplaceService.js";

// AI-powered gig marketplace & freelancer-job matching.

const router = express.Router();

/**
 * @route POST /api/gig-marketplace/match
 * @desc AI-powered gig marketplace matching freelancers to tasks.
 */
router.post("/match", async (req, res) => {
  try {
    const { skills, experience, preferredRate } = req.body;
    if (!skills || !experience || !preferredRate) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const matchedGigs = await getGigMatches(skills, experience, preferredRate);
    res.json({ matchedGigs });
  } catch (error) {
    console.error("Error in AI gig matching:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
