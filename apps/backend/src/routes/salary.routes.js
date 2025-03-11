import express from "express";
import {
  fetchGlassdoorSalary,
  fetchPayscaleSalary,
} from "../services/salaryApiService";

const router = express.Router();

// ✅ Existing Salary Benchmarking Route
router.get("/benchmark", async (req, res) => {
  const { role, location } = req.body;
  const glassdoorData = await fetchGlassdoorSalary(role, location);
  const payscaleData = await fetchPayscaleSalary(role, location);

  const combineData = {
    role,
    location,
    glassdoor: glassdoorData,
    payscale: payscaleData,
  };

  res.json(combineData);
});

// ✅ New Salary Growth Route
router.get("/growth", (req, res) => {
  const salaryGrowth = [
    { year: 2023, salary: 60000 },
    { year: 2024, salary: 65000 },
    { year: 2025, salary: 72000 },
  ];
  res.json(salaryGrowth);
});

export default router;
