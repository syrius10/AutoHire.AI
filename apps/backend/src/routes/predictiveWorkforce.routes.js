import express from "express";
import { predictHiringDemand } from "../services/predictiveWorkforceService.js";

// AI-powered workforce demand forecasting & hiring needs.

const router = express.Router();

/**
 * @route POST /api/predictive-workforce/hiring-demand
 * @desc AI-powered workforce demand forecasting
 */
router.post("/hiring-demand", async (req, res) => {
  try {
    const { industryGrowth, budget, companySize } = req.body;

    if (!industryGrowth || !budget || !companySize) {
      return res.status(400).json({ error: "Missing required parameters." });
    }

    const prediction = await predictHiringDemand(industryGrowth, budget, companySize);
    res.json({ predictedHiringNeeds: prediction });
  } catch (error) {
    console.error("Error in workforce demand prediction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
