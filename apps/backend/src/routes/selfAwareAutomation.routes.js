import express from "express";
import { analyzeAutomationStatus } from "../services/selfAwareAutomationService.js";

// AI-driven self-aware workforce automation agents.

const router = express.Router();

/**
 * @route POST /api/self-aware-automation/analyze
 * @desc AI-powered self-aware workforce automation analysis
 */
router.post("/analyze", async (req, res) => {
  try {
    const { systemLoad, errorRate, taskCompletion } = req.body;
    if (systemLoad === undefined || errorRate === undefined || taskCompletion === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const statusReport = await analyzeAutomationStatus(systemLoad, errorRate, taskCompletion);
    res.json(statusReport);
  } catch (error) {
    console.error("Error in self-aware automation analysis:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
