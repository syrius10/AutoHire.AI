import express from "express";
import { predictCareerProgression } from "../services/selfAdaptingCareerService.js";

// AI-based self-driven career growth & automated career pathing.

const router = express.Router();

/**
 * @route POST /api/self-adapting-career/predict
 * @desc AI-driven career growth prediction
 */
router.post("/predict", async (req, res) => {
  try {
    const { experience, skillsLevel } = req.body;
    if (!experience || !skillsLevel) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const prediction = await predictCareerProgression(experience, skillsLevel);
    res.json({ careerGrowthPrediction: prediction });
  } catch (error) {
    console.error("Error predicting career progression:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
