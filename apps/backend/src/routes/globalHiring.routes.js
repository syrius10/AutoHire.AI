import express from "express";
import { getHiringRecommendations } from "../services/globalHiringService.js";

// AI-powered international hiring recommendations.

const router = express.Router();

/**
 * @route POST /api/global-hiring/recommendations
 * @desc Get AI-powered international hiring recommendations
 */
router.post("/recommendations", async (req, res) => {
  try {
    const { skillsDemand, talentAvailability, relocationFeasibility } =
      req.body;

    if (!skillsDemand || !talentAvailability || !relocationFeasibility) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const recommendations = await getHiringRecommendations(
      skillsDemand,
      talentAvailability,
      relocationFeasibility,
    );
    res.json(recommendations);
  } catch (error) {
    console.error("Error fetching hiring recommendations:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
