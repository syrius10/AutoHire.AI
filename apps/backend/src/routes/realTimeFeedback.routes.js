import express from "express";
import { analyzeFeedback } from "../services/realTimeFeedbackService.js";

// AI-based real-time feedback & sentiment analysis

const router = express.Router();

/**
 * @route POST /api/real-time-feedback/analyze
 * @desc AI-powered real-time work feedback & sentiment analysis
 */
router.post("/analyze", async (req, res) => {
  try {
    const { employeeId, feedbackText } = req.body;
    if (!employeeId || !feedbackText) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const feedbackAnalysis = await analyzeFeedback(employeeId, feedbackText);
    res.json(feedbackAnalysis);
  } catch (error) {
    console.error("Error analyzing feedback:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
