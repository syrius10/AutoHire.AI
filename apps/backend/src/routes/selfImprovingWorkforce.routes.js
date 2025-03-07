import express from "express";
import { predictWorkforceEvolution } from "../services/selfImprovingWorkforceService.js";

// AI-driven workforce evolution & predictive self-learning models.

const router = express.Router();

/**
 * @route POST /api/self-improving-workforce/predict
 * @desc AI-driven workforce evolution prediction
 */
router.post("/predict", async (req, res) => {
  try {
    const { experience, industryDemand, aiAdoption } = req.body;
    if (!experience || !industryDemand || !aiAdoption) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const prediction = await predictWorkforceEvolution(experience, industryDemand, aiAdoption);
    res.json({ workforcePrediction: prediction });
  } catch (error) {
    console.error("Error predicting workforce evolution:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
