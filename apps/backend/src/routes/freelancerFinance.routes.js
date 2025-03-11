import express from "express";
import { getFreelancerIncomeForecast } from "../services/freelancerFinanceService.js";

const router = express.Router();

/**
 * @route POST /api/freelancer-finance/income-forecast
 * @desc AI-powered freelancer income forecasting
 */
router.post("/income-forecast", async (req, res) => {
  try {
    const {
      monthlyGigs,
      avgEarnings,
      experience,
      pastEarnings,
      jobsCompleted,
      avgRating,
    } = req.body;

    if (
      !monthlyGigs ||
      !avgEarnings ||
      !experience ||
      !pastEarnings ||
      !jobsCompleted ||
      !avgRating
    ) {
      return res.status(400).json({ error: "All input fields are required" });
    }

    const estimatedIncome = await getFreelancerIncomeForecast(
      parseFloat(monthlyGigs),
      parseFloat(avgEarnings),
      parseFloat(experience),
      parseFloat(pastEarnings),
      parseFloat(jobsCompleted),
      parseFloat(avgRating),
    );

    res.json({ estimatedIncome });
  } catch (error) {
    console.error("Error in freelancer income forecasting:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
