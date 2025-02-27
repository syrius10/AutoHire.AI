import express from "express";
import { enhanceResume } from "../services/resumeEnhancementService.js";

// AI-powered resume optimization & branding

const router = express.Router();

/**
 * @route POST /api/resume-enhancement
 * @desc AI-powered resume optimization & branding
 */
router.post("/", async (req, res) => {
  try {
    const { resumeText } = req.body;
    if (!resumeText) {
      return res.status(400).json({ error: "Resume text is required" });
    }

    const enhancedResume = await enhanceResume(resumeText);
    res.json(enhancedResume);
  } catch (error) {
    console.error("Error enhancing resume:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
