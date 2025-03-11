import express from "express";
import { getSalaryBenchmark } from "../services/multiCountrySalaryService.js";

// AI-based multi-country salary benchmarking.

const router = express.Router();

/**
 * @route POST /api/multi-country-salary/benchmark
 * @desc AI-powered salary benchmarking across different countries
 */
router.post("/benchmark", async (req, res) => {
  try {
    const { economyScore, industryDemand, experience } = req.body;

    if (
      economyScore === undefined ||
      industryDemand === undefined ||
      experience === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const salaryEstimate = await getSalaryBenchmark(
      economyScore,
      industryDemand,
      experience,
    );
    res.json(salaryEstimate);
  } catch (error) {
    console.error("Error fetching salary benchmark:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
