import express from "express";
import { predictIndustryDemand } from "../services/industryDemandPredictionService.js";

// Predicts job & skill demand trends across industries

const router = express.Router();

// 📌 Route: Predict industry demand trends
router.post("/", async (req, res) => {
  try {
    const { year, growthRate } = req.body;
    const prediction = await predictIndustryDemand(year, growthRate);
    res.json({ predictedSkillDemand: prediction });
  } catch (error) {
    res.status(500).json({ error: "Failed to predict industry demand trends." });
  }
});

export default router;
