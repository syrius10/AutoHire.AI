import express from "express";
import { getWellBeingRecommendations } from "../services/wellBeingRecommendationService.js";

const router = express.Router();

/**
 * @route   POST /api/wellbeing/recommend
 * @desc    Provides AI-driven well-being recommendations
 * @access  Public
 */
router.post("/recommend", async (req, res) => {
  try {
    const recommendations = await getWellBeingRecommendations(req.body);
    res.json(recommendations);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to provide well-being recommendations." });
  }
});

export default router;
