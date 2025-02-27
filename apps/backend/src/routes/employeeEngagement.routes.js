import express from "express";
import { analyzeEngagement } from "../services/employeeEngagementService.js";

const router = express.Router();

/**
 * @route POST /api/employee-engagement/analyze
 * @desc AI-powered employee engagement analysis
 */
router.post("/analyze", async (req, res) => {
  try {
    const { feedback, workload, teamSatisfaction, careerGrowth } = req.body;

    if (!feedback || workload === undefined || teamSatisfaction === undefined || careerGrowth === undefined) {
      return res.status(400).json({ error: "Missing required engagement data" });
    }

    const engagementResult = await analyzeEngagement(feedback, workload, teamSatisfaction, careerGrowth);
    res.json(engagementResult);
  } catch (error) {
    console.error("Error analyzing employee engagement:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
