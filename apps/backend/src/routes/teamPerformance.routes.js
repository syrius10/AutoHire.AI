import express from "express";
import { analyzeTeamPerformance } from "../services/teamPerformanceService.js";

// AI-driven team collaboration & performance analytics

const router = express.Router();

/**
 * @route POST /api/team-performance
 * @desc AI-powered team collaboration & productivity analysis
 */
router.post("/", async (req, res) => {
  try {
    const { collaboration, productivity, communication } = req.body;
    if (!collaboration || !productivity || !communication) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const performanceAnalysis = await analyzeTeamPerformance(collaboration, productivity, communication);
    res.json(performanceAnalysis);
  } catch (error) {
    console.error("Error analyzing team performance:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
