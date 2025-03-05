import express from "express";
import { recommendHiringLocation } from "../services/locationBasedHiringService.js";

// Provides AI-powered hiring recommendations based on location data.

const router = express.Router();

/**
 * @route POST /api/location-based-hiring/recommend
 * @desc AI-driven hiring recommendations based on real-time location insights.
 */
router.post("/recommend", async (req, res) => {
  try {
    const { demandScore, talentAvailability, costLiving, infraScore } = req.body;
    
    if (!demandScore || !talentAvailability || !costLiving || !infraScore) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hiringRecommendation = await recommendHiringLocation(demandScore, talentAvailability, costLiving, infraScore);
    res.json(hiringRecommendation);
  } catch (error) {
    console.error("Error in location-based hiring recommendation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
