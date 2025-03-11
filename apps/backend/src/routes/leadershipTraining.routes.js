import express from "express";
import { getLeadershipTraining } from "../services/leadershipTrainingService.js";

// AI-powered leadership training recommendations.

const router = express.Router();

/**
 * @route POST /api/leadership-training/recommend
 * @desc AI-driven leadership training recommendations
 */
router.post("/recommend", async (req, res) => {
  try {
    const { experience, courses, performance } = req.body;
    if (
      experience === undefined ||
      courses === undefined ||
      performance === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const recommendation = await getLeadershipTraining(
      experience,
      courses,
      performance,
    );
    res.json({ trainingRecommendation: recommendation });
  } catch (error) {
    console.error("Error in leadership training API:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
