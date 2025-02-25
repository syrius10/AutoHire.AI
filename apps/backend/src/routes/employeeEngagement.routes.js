import express from "express";
import { analyzeEmployeeEngagement } from "../services/employeeEngagementService.js";

const router = express.Router();

/**
 * @route   POST /api/engagement/analyze
 * @desc    Analyzes employee sentiment and engagement level
 * @access  Public
 */
router.post("/analyze", async (req, res) => {
  try {
    const engagement = await analyzeEmployeeEngagement(req.body);
    res.json(engagement);
  } catch (error) {
    res.status(500).json({ error: "Failed to analyze employee engagement." });
  }
});

export default router;
