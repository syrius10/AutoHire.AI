import express from "express";
import { predictRetention } from "../services/aiTalentRetentionService.js";

// AI-based predictive workforce retention management

const router = express.Router();

/**
 * @route POST /api/ai-talent-retention/predict
 * @desc AI-driven workforce retention prediction
 */
router.post("/predict", async (req, res) => {
  try {
    const { workload, satisfaction, careerGrowth, workLifeBalance } = req.body;
    if (!workload || !satisfaction || !careerGrowth || !workLifeBalance) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const prediction = await predictRetention(workload, satisfaction, careerGrowth, workLifeBalance);
    res.json({ prediction });
  } catch (error) {
    console.error("Error in talent retention prediction:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
