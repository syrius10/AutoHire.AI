import express from "express";
import {
  provideTip,
  assessPerformance
} from "../services/aiWorkCoachService.js";

// AI-powered real-time work coaching & training.

const router = express.Router();

/**
 * @route GET /api/work-coach/tip
 * @desc Get AI-generated work coaching tips
 */
router.get("/tip", async (req, res) => {
  try {
    const { skill } = req.query;
    const result = await provideTip(skill || "general");
    res.json({ tip: result });
  } catch (error) {
    console.error("Error getting work coaching tip:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

/**
 * @route POST /api/work-coach/assess
 * @desc Assess employee performance and provide AI-driven feedback
 */
router.post("/assess", async (req, res) => {
  try {
    const { productivityScore } = req.body;
    if (productivityScore === undefined) {
      return res.status(400).json({ error: "Productivity score is required" });
    }

    const result = await assessPerformance(productivityScore);
    res.json({ feedback: result });
  } catch (error) {
    console.error("Error assessing performance:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
