import express from "express";
import { predictQuantumHiringPerformance } from "../services/quantumHiringPerformanceService.js";

// AI-based next-gen AI hiring & performance optimization.

const router = express.Router();

/**
 * @route POST /api/quantum-hiring-performance/analyze
 * @desc AI-powered quantum hiring & performance modeling
 */
router.post("/analyze", async (req, res) => {
  try {
    const { experience, aiSkills, softSkills, educationLevel } = req.body;
    if (experience === undefined || aiSkills === undefined || softSkills === undefined || educationLevel === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const hiringPrediction = await predictQuantumHiringPerformance(experience, aiSkills, softSkills, educationLevel);
    res.json({ hiringPrediction });
  } catch (error) {
    console.error("Quantum Hiring Performance Analysis Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
