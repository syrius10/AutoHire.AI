import express from "express";
import { suggestEngagementStrategy } from "../services/aiEmployeeEngagementService.js";

// AI-driven employee engagement automation

const router = express.Router();

/**
 * @route POST /api/ai-employee-engagement/suggest
 * @desc AI-powered employee engagement strategy
 */
router.post("/suggest", async (req, res) => {
  try {
    const strategy = await suggestEngagementStrategy();
    res.json({ strategy });
  } catch (error) {
    console.error("Error in engagement strategy:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
