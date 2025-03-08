import express from "express";
import { automateHiring } from "../services/aiAutomatedHiringService.js";

// AI-powered global hiring automation API routes

const router = express.Router();

/**
 * @route POST /api/ai-automated-hiring/evaluate
 * @desc AI evaluates candidates for automated job hiring
 */
router.post("/evaluate", async (req, res) => {
  try {
    const { skills, experience, culturalFit } = req.body;
    if (!skills || !experience || !culturalFit) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await automateHiring(skills, experience, culturalFit);
    res.json(result);
  } catch (error) {
    console.error("Error in AI hiring evaluation:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
