import express from "express";
import { getSalaryBenchmark } from "../services/salaryBenchmarkingService.js";

// Provides competitive salary benchmarking insights

const router = express.Router();

// 📌 Route: Get salary benchmarking data
router.post("/", async (req, res) => {
  try {
    const { role, experience, industry, location } = req.body;
    const salary = await getSalaryBenchmark(
      role,
      experience,
      industry,
      location,
    );
    res.json({ salary });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch salary benchmarking insights." });
  }
});

export default router;
